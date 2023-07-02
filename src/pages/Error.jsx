import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" style={{
            'display': ' flex',
            'flexDirection': ' column',
            'alignItems': ' center',
            'justifyContent': ' center',
            'width': '100%',
            'height': '100vh',
            'textTransform': 'uppercase',
        }}>
            <h5>OOPS! PAGE {error.statusText || error.message}</h5>
            <h1 style={{
                'fontSize': '12rem',
                'fontWeight': ' 900',
                'textShadow': '-3px 2px 0px #fff',
                'letterSpacing': '-8px',
                'color': 'blue',
            }}> <span>{error.status}</span>  </h1>
            <p>WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND</p>
            <Link to="/" className="btn btn-primary mt-5">
                GO BACK TO THE HOME PAGE
            </Link>

        </div >
    );
}