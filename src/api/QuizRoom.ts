import * as Colyseus from 'colyseus.js'
import 'dayjs/locale/es'

export default class QuizRoom {
  colyseus: any
  room: any

  constructor() {
    this.colyseus = new Colyseus.Client('ws://localhost:2567')
  }

  join = async (id: string) => {
    try {
      const room = await this.colyseus.joinById(id, {/* options */})
      this.room = room
    } catch (error) {
      console.error("Join error", error)
    }
  }

  create = async () => {
    try {
      const room = await this.colyseus.create('quiz', { /* options */ })
      this.room = room
    } catch (error) {
      console.error("Create error", error)
    }
  }
}
