export const fetchMenus = () => {
    return(
        $.ajax({
            method: "GET",
            url: "/api/menus"
        })
    )
};
