import Head from "next/head";

export function Navbar(){
    return(
        <div>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
            </Head>

            <section class="nav-bar sticky-top">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                    <a class="navbar-brand" href="/index.html">BookStore</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span ><i class="fas fa-bars"></i></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto mx-4 ">
                        <li class="nav-item mx-2">
                            <a class="nav-link text-white" aria-current="page" href="#">HOME</a>
                        </li>
                        <li class="nav-item mx-2">
                            <a class="nav-link text-white" href="#">SERVICES</a>
                        </li>
                        <li class="nav-item mx-2">
                            <a class="nav-link text-white" href="#">ABOUT US</a>
                        </li>
                        <li class="nav-item mx-2">
                            <a class="nav-link text-white" href="#">TESTIMONIALS</a>
                        </li>
                        <li class="nav-item mx-2">
                            <a class="nav-link text-white" href="#">CONTACT US</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </section>
        </div>
    );
}
