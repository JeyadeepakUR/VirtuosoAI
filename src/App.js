import { useState, useEffect } from "react"

const App = () => {
  let getMessage = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "hi how are you" }),
    }
    try{
      const response = await fetch("http://localhost:8000/completions", options)
      const data = await response.json()
      console.log(data)
      //setMessages(data.choices[0].message)
    }catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getMessage()
    }, [])

  //console.log(messages)
  return (
    <div className='app'>
    <section className="side-bar"></section>
    
      <section className='main'>
        <h1>VIRTUOSO.AI</h1>
        <ul className="feed"></ul>
      </section>
      <div className="bottom-section">
          <div className="input-container">
            <input/>
            <button id="submit" onClick={getMessage}>►</button>
          </div> 
          <p className="info">
                GPT March 14  Version.  Free Research Preview 
                Our goal is to make AI systems more natural and safe to interact.
                Your feedback will help us improve. 
          </p>
      </div>
    </div>
  )
}
export default App;
