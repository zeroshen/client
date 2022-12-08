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
      <h1 style="color: var(--vue-color-primary)">Stage 6 - REST api</h1>
    </div>
    <div class="group-words">
      <h1>What's an API?</h1>
      An API is a set of definitions and protocols for building and integrating
      application software. It’s sometimes referred to as a contract between an
      information provider and an information user—establishing the content
      required from the consumer (the call) and the content required by the
      producer (the response). For example, the API design for a weather service
      could specify that the user supply a zip code and that the producer reply
      with a 2-part answer, the first being the high temperature, and the second
      being the low.
      <br />
      In other words, if you want to interact with a computer or system to
      retrieve information or perform a function, an API helps you communicate
      what you want to that system so it can understand and fulfill the request.
      <br />
      You can think of an API as a mediator between the users or clients and the
      resources or web services they want to get. It’s also a way for an
      organization to share resources and information while maintaining
      security, control, and authentication—determining who gets access to what.
      <br />
      Another advantage of an API is that you don’t have to know the specifics
      of caching—how your resource is retrieved or where it comes from.
    </div>
    <div class="group-words">
      <h1>REST</h1>
      REST is a set of architectural constraints, not a protocol or a standard.
      API developers can implement REST in a variety of ways.
      <br />
      When a client request is made via a RESTful API, it transfers a
      representation of the state of the resource to the requester or endpoint.
      This information, or representation, is delivered in one of several
      formats via HTTP: JSON (Javascript Object Notation), HTML, XLT, Python,
      PHP, or plain text. JSON is the most generally popular file format to use
      because, despite its name, it’s language-agnostic, as well as readable by
      both humans and machines.
      <br />
      Something else to keep in mind: Headers and parameters are also important
      in the HTTP methods of a RESTful API HTTP request, as they contain
      important identifier information as to the request's metadata,
      authorization, uniform resource identifier (URI), caching, cookies, and
      more. There are request headers and response headers, each with their own
      HTTP connection information and status codes.
      <br />
      In order for an API to be considered RESTful, it has to conform to these
      criteria:
      <br />
      <ul>
        <li>
          A client-server architecture made up of clients, servers, and
          resources, with requests managed through HTTP.
        </li>
        <li>
          Stateless client-server communication, meaning no client information
          is stored between get requests and each request is separate and
          unconnected.
        </li>
        <li>Cacheable data that streamlines client-server interactions.</li>
        <li>
          A uniform interface between components so that information is
          transferred in a standard form. This requires that:
          <ul>
            <li>
              resources requested are identifiable and separate from the
              representations sent to the client.
            </li>
            <li>
              resources can be manipulated by the client via the representation
              they receive because the representation contains enough
              information to do so.
            </li>
            <li>
              self-descriptive messages returned to the client have enough
              information to describe how the client should process it.
            </li>
            <li>
              hypertext/hypermedia is available, meaning that after accessing a
              resource the client should be able to use hyperlinks to find all
              other currently available actions they can take.
            </li>
          </ul>
        </li>
        <li>
          A layered system that organizes each type of server (those responsible
          for security, load-balancing, etc.) involved the retrieval of
          requested information into hierarchies, invisible to the client.
        </li>
        <li>
          Code-on-demand (optional): the ability to send executable code from
          the server to the client when requested, extending client
          functionality.
        </li>
      </ul>
      <br />
      Though the REST API has these criteria to conform to, it is still
      considered easier to use than a prescribed protocol like SOAP (Simple
      Object Access Protocol), which has specific requirements like XML
      messaging, and built-in security and transaction compliance that make it
      slower and heavier.
    </div>
    <div class="game-quiz">
      <router-link to="../game/6/quiz">
        <button class="quiz-button">Go to Quiz</button>
      </router-link>
    </div>
  </section>
</template>
