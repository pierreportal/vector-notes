# Note-Taking Application Using Markdown, Word Embeddings, and k-NN for Similarity Organization

## 1. Introduction

### 1.1 Concept
A note-taking application that uses Markdown for note formatting and leverages [Doc2Vec for document embeddings](https://www.geeksforgeeks.org/doc2vec-in-nlp/) and [k-nearest neighbors (k-NN)](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm) to organize notes into a tree structure based on their similarities.

[The research Juputer notebook with promising results](research/doc2vec_kmeans_knn.ipynb)

### 1.3 Definitions
- **Markdown**: A lightweight markup language with plain-text formatting syntax.
- **Document Embedding**: A type of document representation that allows documents to be represented as vectors in a continuous vector space. (See **Word Embedding**)
- **k-Nearest Neighbors (k-NN)**: A machine learning algorithm used to find the k most similar items in a dataset.
- [**TF-IDF**: Term Frequency-Inverse Document Frequency](https://en.wikipedia.org/wiki/Tf%E2%80%93idf), a statistical measure used to evaluate the importance of a word in a document relative to a collection of documents.

## 2. Requirements

### 2.1 Functional Requirements
- **Note Creation**: Users must be able to create and edit notes using Markdown.
- **Note Storage**: Notes must be stored persistently in a database.
- **Note Embedding**: The application must convert notes into vector representations using document embeddings.
- **Similarity Calculation**: The application must calculate similarities between notes using k-NN.
- **Tree Structure**: The application must organize notes into a tree structure based on their similarities.
- **Visualization**: The application must provide a visual representation of the similarity tree.

### 2.2 Non-Functional Requirements
- **Performance**: The application should perform similarity calculations and tree updates efficiently.
- **Scalability**: The application should handle a large number of notes without significant performance degradation.
- **Usability**: The application should be user-friendly and intuitive.
- **Security**: Notes should be stored securely and access-controlled.

## 3. System Architecture

### 3.1 Overview
The system architecture consists of the following components:
- **Frontend**: A web-based user interface for note creation, editing, and visualization.
- **Backend**: A server-side application responsible for handling requests, processing notes, and managing the database.
- **Database**: A persistent storage system for notes and embeddings.

## 4. Data Flow

1. **Note Creation**: User creates/edits a note in the Markdown editor.
2. **Note Submission**: The note is submitted to the backend via the API.
3. **Embedding Generation**: The embedding service generates a vector representation of the note.
4. **Note Storage**: The note and its embedding are stored in the database.
5. **Similarity Calculation**: The similarity service calculates similarities between the new note and existing notes using k-NN.
6. **Tree Update**: The tree builder updates the similarity tree based on the new note's embedding.
7. **Visualization Update**: The frontend updates the visualization to reflect the updated tree.

## 5. Implementation Details

### 5.1 Preprocessing
- **Tokenization**: Split notes into words.
- **Cleaning**: Remove punctuation, lowercase, and stop words.

### 5.2 Embedding Generation
- **Model Selection**: Doc2Vec.
- **Vector Representation**: Generate vectors for each note and aggregate them (e.g., averaging).

### 5.3 TF-IDF Weighting
- **TF-IDF Calculation**: Compute TF-IDF weights for words in notes.
- **Weighted Embedding**: Multiply word vectors by their TF-IDF weights and aggregate to get note embeddings.

### 5.4 Similarity Calculation
- **k-NN Algorithm**: Use k-NN to find the N most similar notes based on vector distance (e.g., cosine similarity).

### 5.5 Tree Construction
- **Hierarchical Clustering**: Use a clustering algorithm to group similar notes and create a tree structure.
- **Tree Update**: Dynamically update the tree as new notes are added.

## 6. API Endpoints

### 6.1 Note Management
- **POST /notes**: Create a new note.
- **GET /notes/{id}**: Retrieve a specific note.
- **PUT /notes/{id}**: Update a specific note.
- **DELETE /notes/{id}**: Delete a specific note.

## 7. Security Considerations

- **Authentication**: Implement user authentication to secure access to notes.
- **Authorization**: Implement role-based access control to manage permissions.
- **Data Encryption**: Encrypt sensitive data in transit and at rest.

## 8. Future Enhancements

- **Collaborative Features**: Allow multiple users to collaborate on notes.
- **Advanced Search**: Implement advanced search capabilities based on embeddings.

## Screenshots

![vector_space](https://github.com/user-attachments/assets/03dfc5bf-9781-4f24-b006-2d7226a385c9)

<img width="1506" alt="Screenshot 2024-12-24 at 10 00 43" src="https://github.com/user-attachments/assets/0df47f13-6159-4e19-a8fb-fc66d2c63e01" />
<img width="1502" alt="Screenshot 2024-12-24 at 10 01 05" src="https://github.com/user-attachments/assets/8fa0e095-60e2-4c46-bafe-8398c92adf55" />

