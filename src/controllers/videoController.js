
    let videos = [
        {
            title: "first video",
            rating: 5,
            comments: 2,
            createdAt: "2 minute ago",
            views: 1,
            id:1,
        },
        {
            title: "Second video",
            rating: 4,
            comments: 1,
            createdAt: "5 minute ago",
            views: 50,
            id:2,
        },
        {
            title: "3rd video",
            rating: 8,
            comments: 30,
            createdAt: "12 minute ago",
            views: 5,
            id:3,
        },
    ]

export const trending = (req, res) => {
    return res.render("home", {pageTitle: "Home", videos});
};
export const watch = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    return res.render("watch", {pageTitle: `Watching: ${video.title}`, video});
}
export const getEdit = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    return res.render("edit", {pageTitle: `Editing: ${video.title}`, video});
}

export const postEdit = (req, res) => {
    const { id } = req.params;
    const {title} = req.body;
    videos[id - 1].title = title;
    return res.redirect(`/videos/${id}`);
}