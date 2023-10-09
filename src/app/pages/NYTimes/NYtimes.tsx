import { useQuery } from 'react-query';
import './NYtimes.scss';
import NYTarticle from '../../../interfaces/NYTarticle';

const Nytimes = () => {
    const { isLoading, isFetched, error, data } = useQuery({
        queryFn: () => Promise.resolve<{results: NYTarticle[]}>(fetch(`https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=${import.meta.env.VITE_NYT_API_KEY}`).then((res) => res.json())),
    });

    if(isLoading || !isFetched) {
        return (
            <main>
                <h1>Page loading ...</h1>
            </main>
        );
    }

    if(error) {
        if(error instanceof Error) {
            return(
                <main>
                    <h1>An error has occurred: {error.message}</h1>
                </main>
            ); 
        }
        return (
            <main>
                <h1>Unknown error</h1>
            </main>
        );
    }  

    return (
        <main>
            <h1>NewYorkTimes - Actuality</h1>
            <div className="articles">
                {
                    data?.results.filter(a => a.multimedia.length >= 3 && a.title != "").map(article => {
                        console.log(article.multimedia[2].width);
                        return (
                            <div className="article" onClick={() => window.open(article.url, '_blank')}>
                                <img src={article.multimedia[2] ? article.multimedia[2].url : ''} alt="" style={{display: article.multimedia[2] != undefined ? 'block' : 'none'}} />
                                <h1>{article.title}</h1>
                                <h2>{article.abstract}</h2>
                                <p>{new Date(article.published_date).toDateString()}</p>
                            </div>
                        );
                    })
                }
            </div>
        </main>
    );
}

export default Nytimes;