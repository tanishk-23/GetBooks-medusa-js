import style from '../styles/Login.module.css'

export default function Login(){
    return (
        <div className={style.body}>
            <section className={style.form_className}>
                <div className={`${style.container} my-5 d-flex text-center text-light`}>
                <div className={style.tree_div}>
                    <img src="images/signup-img.jpg" className={style.tree_img} />
                </div>
                <div className={style.login_form}>
                    <form action="">
                    <h1 className={`${style.text_light} my-3`}>BookStore</h1>
                    <div className="row">
                        <div className="col-ld-6">
                            <p className={`fs-2 ${style.login}`}><b>Login</b></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-ld-6">
                            <input type="email" placeholder="Email" className={style.email} />
                        </div>
                        <div className={`col-ld-6 my-4 ${style.text_light}`}>
                            <input type="password" placeholder="Password" className={style.password} />
                        </div>
                        <div className="col-ld-6 my-2">
                            <button className="button">Login</button> 
                        </div>
                        <div className="col-ld-6 my-3">
                            <p>Don't have account?<a href="#" className="mx-2 register">Register</a></p>
                        </div>
                        
                    </div>
                </form>
                </div>
                        
                </div>
            </section>
        </div>
    );
}
