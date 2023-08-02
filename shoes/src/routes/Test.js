import axios from 'axios'

function Test(){
    return(
        <button onClick={()=>{
            axios.get('localhost:8080').then((결과)=>{
                console.log(결과)
                })
                .catch(()=>{
                    console.log('실패함')
                    })
        }}>서버 통신 버튼 </button>
    )
}

export default Test;

