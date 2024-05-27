let chave =1;

class Evento {
    
    constructor() {
        this.eventos = []; 
    }

    
    getAllEventos() {
        return this.eventos;
    }

    
    createEvento(titulo, descricao, data, local, criadoEM, atualizadoEM) {
        const id = `c${chave++}`; 
        const newEvento = { id, titulo, descricao, data, local, criadoEM, atualizadoEM }; 
        this.eventos.push(newEvento); 
        return newEvento; 
    }

    
    getEventoById(id) {
        const eventoResult = this.eventos.find(evento => evento.id === id); 
                return eventoResult; 
    }

    
    deleteEvento(id) {
        const eventoIndex = this.eventos.findIndex(evento => evento.id === id); 
        if (eventoIndex !== -1) { 
            this.eventos.splice(eventoIndex, 1); 
            return true; 
        }
        return false;
    }

    
    updateEvento(id, titulo, descricao, data, local, criadoEM, atualizadoEM) {
        const eventoIndex = this.eventos.findIndex(evento => evento.id === id); 
        if (eventoIndex !== -1) { 
            this.eventos[eventoIndex].titulo = titulo;
            this.eventos[eventoIndex].descricao = descricao;
            this.eventos[eventoIndex].data = data; 
            this.eventos[eventoIndex].local = local;
            this.eventos[eventoIndex].criadoEM = criadoEM; 
            this.eventos[eventoIndex].atualizadoEM = atualizadoEM;
            return this.eventos[eventoIndex]; 
        }
        return null; 
    }
}


module.exports = Evento;
