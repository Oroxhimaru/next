#  next js learning
 

## two way binding
two way binding in react/nextjs
 const [username, setUsername] = useState("");
 <form>
      <h1 className='text-2xl mb-5'>Enter you name here: </h1>
      <input type="text"
       className='border-2 border-zinc-800 px-4 py-2 text-xl'
       value={username}
       onChange={(e) => {
        setUsername(e.target.value)
       }}/>
    </form>


## dynamic routing and api calling axios

1. use LINK tag for stopping the reloading on page