import { Server, Response } from 'miragejs'

new Server({
  seeds(server) {
    server.db.loadData({
      todos: {}
    })
  },

  routes() {
    this.timing = 50
    this.namespace = 'api'

    this.get('/data', (schema) => {
      return schema.db.todos
      // return new Response(
      //     400,
      //     { some: "header" },
      //     { errors: ["name cannot be blank"] }
      //   )
    })

    this.post('/data', (schema, request) => {
      const formdata = JSON.parse(request.requestBody);

      return schema.db.todos.insert({
        'firstname': formdata.firstname,
        'lastname': formdata.lastname,
        'gender': formdata.gender,
        'message': formdata.message,
        'confidential': formdata.confidential,
        'terms': formdata.terms,
      })
    })

  }
})
