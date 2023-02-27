import 'bulma/css/bulma.css'
import ProfileCard from "./profileCard";
import AlexaImage from "./images/alexa.png"
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"


function App(){
 return (
    <div>
        <section className='hero is-primary'>
            <div className='hero-body'>
                <p className='title'>Personal Digital Assistant</p>
            </div>
        </section>
        
        
<div className='container'>
    <section className='section'>
        <div className='columns'>
            <div className='column is-2'>
            <ProfileCard 
            title="alexa" 
            handle="@alexa1" 
            image={AlexaImage} 
            description="Alexa was created by amazon and helps you buy things" />
            </div>

            <div className='column is-2'>
            <ProfileCard 
            title="siri" 
            handle="@siri2" 
            image={CortanaImage}
            description="It was created by Microsoft and is used for a lot of work" />            
            </div>

            <div className='column is-2'>
            <ProfileCard 
            title="Cortana" 
            handle="@cotana3" 
            image={SiriImage}
            description="it was created by Apple and is not being phased out" />   
            </div>
        </div>
    </section>
</div>

        
        
        
    </div>
 )  
}

export default App;