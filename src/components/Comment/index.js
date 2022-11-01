import { Trash } from 'phosphor-react'

import { Container } from "./styled";

export function Comment({ comment, onDeleteComment }) {

    function handleDeleteComment() {
        onDeleteComment(comment.id)
    }

    return (
        <Container>
            <p>{comment.content}</p>
            <button onClick={handleDeleteComment} title="Deletar comentario">
                <Trash size={24} />
            </button>
        

        <div>
            <input id="checkbox" type="checkbox" class="form-check-input"/>
            <label class="form-check-label" for="exampleCheck1"> Tarefa Concluída</label>
        </div>
        </Container>
    )
}