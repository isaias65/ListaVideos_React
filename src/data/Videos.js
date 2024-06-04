class video {
    constructor(id, title, descripcion, imagenurl, videourl) {
        this.id = id;
        this.title = title;
        this.descripcion = descripcion;
        this.imagenurl = imagenurl;
        this.videourl = videourl;
    }
}

const videolink = [
    new video(
        1,
        'React: The Documentary',
        'The origin story of React',
        'https://images.unsplash.com/photo-1716738703767-e277c57b2a90?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://www.youtube.com/watch?v=WQMCyg10VnQ'
    ),
    new video(
        2,
        'Rethinking Best Practices',
        'Pete Hunt (2013)',
        'https://cdn.lifeofpix.com/238472/_w1800/368827/lifeofpix-238472368827.webp',
        'https://www.youtube.com/watch?v=P9YwNtBS4m4'
    ),
    new video(
        3,
        'Introducing React Native',
        'Tom Occhino (2015)',
        'https://cdn.lifeofpix.com/368680/_w1800/368699/lifeofpix-368680368699.webp',
        'https://www.youtube.com/watch?v=Vn39e16poGM'
    ),
    new video(
        4,
        'Introducing React Hooks',
        'Sophie Alpert and Dan Abramov (2018)',
        'https://cdn.lifeofpix.com/368680/_w1800/368699/lifeofpix-368680368699.webp',
        'https://www.youtube.com/watch?v=Vn39e16poGM'
    ),
]

export {videolink}