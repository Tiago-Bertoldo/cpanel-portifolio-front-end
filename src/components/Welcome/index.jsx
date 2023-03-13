import './Style/desktop.scss'

export default function Welcome ({login}){
    return (
        <section id='welcome-user'>
            <div>
                <p>Welcome <span> {login} </span></p>
            </div>
        </section>
        
    )
}