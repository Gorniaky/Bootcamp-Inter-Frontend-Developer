import { Button, Grid, TextField } from '@material-ui/core/';
import { useEffect, useState } from 'react';

const Contatos = () => {

  const url = 'http://localhost:5000/message'
  const [message, setMessage] = useState([]);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [validator, setValidator] = useState(false);
  const [render, setRender] = useState(false);
  const [success, setSuccess] = useState(false);
  const [noConnection, setNoConnection] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch(url)
        .catch(() => setNoConnection(true) & setTimeout(() => setNoConnection(false), 5000))
      if (!response) return
      const data = await response.json();
      setMessage(data);
    })();
  }, [render])

  const sendMessage = () => {
    if (!author.length || !content.length)
      return setValidator(true) & setTimeout(() => setValidator(false), 3000)

    setValidator(false)

    const bodyForm = {
      email: author,
      message: content,
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyForm)
    })
      .then((response) => response.json())
      .catch(() => setNoConnection(true) & setTimeout(() => setNoConnection(false), 5000))
      .then((data) => {
        if (data?.id) {
          setRender(true);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 5000)
        }
      })

    setAuthor('');
    setContent('');
  }

  return (
    <>
      <Grid container direction="row" xs={12} className="bg-secondary rounded">
        <TextField id="name" label="Name" value={author} className="bg-secondary-hover transition rounded"
          onChange={(event) => { setAuthor(event.target.value) }} fullWidth />
        <TextField id="message" label="Message" value={content} className="bg-secondary-hover transition rounded"
          onChange={(event) => { setContent(event.target.value) }} fullWidth />
      </Grid>

      <Button onClick={sendMessage} className="mt-2" variant="contained" color="primary">
        Sent
      </Button>

      {noConnection &&
        <div className="alert alert-danger alert-dismissible fade show mt-2" role="alert">
          <strong>Não há conexão com o servidor.</strong>
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
        </div>
      }

      {validator &&
        <div className="alert alert-warning alert-dismissible fade show mt-2" role="alert">
          <strong>Por favor preencha todos os campos!</strong>
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
        </div>
      }

      {success &&
        <div className="alert alert-success alert-dismissible fade show mt-2" role="alert">
          <strong>Mensagem foi enviada!</strong>
        </div>
      }

      {message.map((content) => {
        return (
          <div className="card mt-2" key={content.id}>
            <div className="card-body">
              <h5 className="card-title">{content.email}</h5>
              <p className="card-text">{content.message}</p>
              <p className="card-text"><small className="text-muted">{content.created_at}</small></p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Contatos;
