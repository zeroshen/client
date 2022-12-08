<script setup></script>

<style scoped>
.page-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.group-words {
  padding-top: 40px;
  padding-bottom: 40px;
  padding-right: 80px;
  padding-left: 80px;
}
.quiz-button {
  background-color: #00939c;
  color: #fafafa;
  border: none;
}
ol,
ul {
  list-style: circle;
}

.quiz-button:hover {
  background-color: #016f75;
  color: #fafafa;
  border: none;
  cursor: pointer;
}
.game-text {
  font-family: "Times New Roman";
  font-style: italic;
  color: darkgray;
}
.game-quiz {
  min-width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 2rem;
  margin-bottom: 40px;
}
</style>

<template>
  <section class="page-view">
    <div class="group-words">
      <h1 style="color: var(--vue-color-primary)">Stage 7 - Database</h1>
    </div>
    <div class="group-words">
      <h1>What's a database?</h1>
      A database is an organized collection of structured information, or data,
      typically stored electronically in a computer system. A database is
      usually controlled by a database management system (DBMS). Together, the
      data and the DBMS, along with the applications that are associated with
      them, are referred to as a database system, often shortened to just
      database.
      <br />
      Data within the most common types of databases in operation today is
      typically modeled in rows and columns in a series of tables to make
      processing and data querying efficient. The data can then be easily
      accessed, managed, modified, updated, controlled, and organized. Most
      databases use structured query language (SQL) for writing and querying
      data.
    </div>
    <div class="group-words">
      <h1>What is Structured Query Language (SQL)?</h1>
      SQL is a programming language used by nearly all relational databases to
      query, manipulate, and define data, and to provide access control. SQL was
      first developed at IBM in the 1970s with Oracle as a major contributor,
      which led to implementation of the SQL ANSI standard, SQL has spurred many
      extensions from companies such as IBM, Oracle, and Microsoft. Although SQL
      is still widely used today, new programming languages are beginning to
      appear.
    </div>
    <div class="group-words">
      <h1>Evolution of the database</h1>
      Databases have evolved dramatically since their inception in the early
      1960s. Navigational databases such as the hierarchical database (which
      relied on a tree-like model and allowed only a one-to-many relationship),
      and the network database (a more flexible model that allowed multiple
      relationships), were the original systems used to store and manipulate
      data. Although simple, these early systems were inflexible. In the 1980s,
      relational databases became popular, followed by object-oriented databases
      in the 1990s. More recently, NoSQL databases came about as a response to
      the growth of the internet and the need for faster speed and processing of
      unstructured data. Today, cloud databases and self-driving databases are
      breaking new ground when it comes to how data is collected, stored,
      managed, and utilized.
    </div>
    <div class="group-words">
      <h1>What’s the difference between a database and a spreadsheet?</h1>
      Databases and spreadsheets (such as Microsoft Excel) are both convenient
      ways to store information. The primary differences between the two are:
      <ul>
        <li>How the data is stored and manipulated</li>
        <li>Who can access the data</li>
        <li>How much data can be stored</li>
      </ul>
      Spreadsheets were originally designed for one user, and their
      characteristics reflect that. They’re great for a single user or small
      number of users who don’t need to do a lot of incredibly complicated data
      manipulation. Databases, on the other hand, are designed to hold much
      larger collections of organized information—massive amounts, sometimes.
      Databases allow multiple users at the same time to quickly and securely
      access and query the data using highly complex logic and language.
    </div>
    <div class="group-words">
      <h1>Types of databases</h1>
      There are many different types of databases. The best database for a
      specific organization depends on how the organization intends to use the
      data. Here are some datasets:
      <ul>
        <li>Relational databases</li>
        <li>Object-oriented databases</li>
        <li>Distributed databases</li>
        <li>Data warehouses</li>
        <li>NoSQL databases</li>
        <li>Graph databases</li>
      </ul>
    </div>

    <div class="game-quiz">
      <router-link to="../game/6/quiz">
        <button class="quiz-button">Go to Quiz</button>
      </router-link>
    </div>
  </section>
</template>
