import sys
import ast
import numpy as np
import nltk
import json
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from gensim.models.doc2vec import TaggedDocument
from gensim.models import Doc2Vec
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.decomposition import PCA
import uuid

tfidf_vectorizer = TfidfVectorizer()

nltk.download('punkt')
nltk.download('stopwords')

stop_words = set(stopwords.words('english'))

notes_path = []
notes = []

def main():
    file_paths = sys.stdin.read().splitlines()
    
    for path in file_paths:
        notes_path.append(path)
        with open(path, 'r') as file:
            content = file.read()
            notes.append(content)
    
    preprocess()

def preprocessing_text(text):
    tokens = word_tokenize(text.lower())
    tokens = [word for word in tokens if word.isalpha() and word not in stop_words]
    return tokens

processed_notes = []

def preprocess():
    processed_notes = [preprocessing_text(note) for note in notes]
    tagged_data = [TaggedDocument(words=note, tags=[str(i)]) for i, note in enumerate(processed_notes)]
    train(processed_notes, tagged_data)


def train(processed_notes, tagged_data):
    vector_size=50
    min_count=1
    epochs=100

    tfidf_vectors = tfidf_vectorizer.fit_transform(notes)

    doc2vec_model = Doc2Vec(vector_size=vector_size, min_count=min_count, epochs=epochs)
    doc2vec_model.build_vocab(tagged_data)
    doc2vec_model.train(tagged_data, total_examples=doc2vec_model.corpus_count, epochs=doc2vec_model.epochs)

    note_vectors = [doc2vec_model.infer_vector(note) for note in processed_notes]
    combined_vectors = np.hstack((note_vectors, tfidf_vectors.toarray()))
    reduce_dimension(combined_vectors)

def reduce_dimension(vectors):
    pca = PCA(n_components=3)
    vectors_3d = pca.fit_transform(vectors)
    output_json(vectors_3d)

def output_json(vectors):
    data = []
    for v,p in zip(vectors, notes_path):
        data.append({
            "id": str(uuid.uuid4()),
            "title": p,
            "vector": v.tolist()
        })
    with open('data.json', 'w') as file:
        json.dump(data, file, indent=4)

if __name__ == "__main__":
    main()
