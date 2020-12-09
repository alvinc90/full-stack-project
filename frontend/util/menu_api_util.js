export const fetchMenus = () => {
    // debugger
    return(
        $.ajax({
            method: "GET",
            url: "/api/menus"
        })
    )
};
