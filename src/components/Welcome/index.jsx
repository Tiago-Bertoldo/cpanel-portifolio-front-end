import './Style/desktop.scss'
export default function Welcome ({username}){
    return (
        <section id='welcome-user'>
            <div>
                <p>Welcome <span> {username} </span></p>
            </div>
        </section>
        
    )
}