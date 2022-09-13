import "./index.css";

function Page404 () {

    window.onload = function(){
        document.querySelector('.cont_principal').className="cont_principal cont_error_active";
    }

    return (
        <div className="cont_principal">
        <div class="cont_error">
            
            <h1>Oops</h1>
            <p>The Page you're looking for isn't here.</p>

        </div>
        <div className="cont-aura_1"></div>
        <div className="cont-aura_2"></div>


        </div>
    )
}

export default Page404;