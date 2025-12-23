export default function locationFinder() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject("Geolocation not supported");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latlon = `${position.coords.latitude},${position.coords.longitude}`;
                const imgUrl =`https://www.google.com${latlon}`;
                resolve(imgUrl);
                return latlon;
            },
            (err) => reject(err)
        );
    });
}
