import { getTrailer } from "@/API/getTrailer";
import { useEffect, useState } from "react";

export function useGetVideoTrailer(idViedeo: number, typeMovTV = 'movie') {

    const [trailerKey, setTrailerKey] = useState<string>('')
    console.log('fafafa1')

    async function getVideo() {
        try {
            const dataVideo = await getTrailer(idViedeo, typeMovTV);
            const trailer = dataVideo.results.find((video) => video.type === "Trailer");
            if (trailer && trailer.key) {
                setTrailerKey(trailer.key);
            }
        } catch (error) {
            console.log('ошибка получения видео', error)
        }
    }

    useEffect(() => {
        if (!idViedeo) return;
        getVideo()
    }, [idViedeo, typeMovTV]);

    return trailerKey

}