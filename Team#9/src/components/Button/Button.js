import React from 'react';
import './Button.css'

const Button = () => {
  return(
    <div>
      <form action="/dsign" method="get">
        < button class = "button button4" >Doctor SignUp</button>
      </form>
      <form action="/dlog" method="get">
        < button class = "button button4" >Doctor LogIn</button>
      </form>      
      <form action="/psign" method="get">
        < button class = "button button4" >Patient SignUp</button>
      </form>      
      <form action="/plog" method="get">
        < button class = "button button4" >Patient LogIn</button>
      </form>
    </div>

    

  )
}

export default Button
