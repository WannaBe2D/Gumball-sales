

// Icons -----------------------------------------


const icons = {
    add: `<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg\\">" +
        "<path d="M16.2593 2.3252L16.8569 1.71094C17.1392 1.41211 17.1392 1.01367 16.8569 0.739746L16.666 0.540527C16.4087 0.283203 16.002 0.316406 15.728 0.582031L15.1221 1.17969L16.2593 2.3252ZM6.27344 11.3813L7.89209 10.6758L15.645 2.93115L14.5078 1.81055L6.76318 9.55518L6.01611 11.1157C5.94971 11.2568 6.11572 11.4478 6.27344 11.3813ZM3.25195 16.7603H12.9971C14.4912 16.7603 15.3545 15.897 15.3545 14.187V5.31348L14.0181 6.6499V14.1206C14.0181 14.9839 13.5532 15.4238 12.9805 15.4238H3.27686C2.44678 15.4238 1.98193 14.9839 1.98193 14.1206V4.69922C1.98193 3.83594 2.44678 3.3877 3.27686 3.3877H10.8389L12.1753 2.05127H3.25195C1.52539 2.05127 0.645508 2.91455 0.645508 4.62451V14.187C0.645508 15.9053 1.52539 16.7603 3.25195 16.7603Z" fill="black" fill-opacity="0.5"/>" +
        "</svg>`,
    close: `<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg\\">" +
        "<path d="M4.50244 19.2651H12.1143C13.3013 19.2651 14.0981 18.4932 14.1562 17.3062L14.729 5.23682H15.7251C16.0654 5.23682 16.3477 4.94629 16.3477 4.60596C16.3477 4.26562 16.0654 3.9834 15.7251 3.9834H11.9316V2.71338C11.9316 1.50977 11.1514 0.779297 9.87305 0.779297H6.72705C5.44873 0.779297 4.66846 1.50977 4.66846 2.71338V3.9834H0.891602C0.55957 3.9834 0.269043 4.26562 0.269043 4.60596C0.269043 4.95459 0.55957 5.23682 0.891602 5.23682H1.8877L2.46045 17.3145C2.51855 18.5015 3.30713 19.2651 4.50244 19.2651ZM5.98828 2.79639C5.98828 2.32324 6.31201 2.01611 6.81006 2.01611H9.79004C10.2881 2.01611 10.6118 2.32324 10.6118 2.79639V3.9834H5.98828V2.79639ZM4.61865 18.0117C4.14551 18.0117 3.78857 17.6548 3.76367 17.165L3.18262 5.23682H13.3926L12.853 17.165C12.8281 17.6631 12.4712 18.0117 11.9814 18.0117H4.61865ZM5.84717 16.5923C6.1626 16.5923 6.37012 16.3931 6.36182 16.1025L6.11279 7.2207C6.10449 6.93018 5.88867 6.73926 5.58984 6.73926C5.27441 6.73926 5.06689 6.93848 5.0752 7.229L5.33252 16.1025C5.34082 16.4014 5.54004 16.5923 5.84717 16.5923ZM8.3125 16.5923C8.62793 16.5923 8.84375 16.3931 8.84375 16.1025V7.229C8.84375 6.93848 8.62793 6.73926 8.3125 6.73926C7.99707 6.73926 7.77295 6.93848 7.77295 7.229V16.1025C7.77295 16.3931 7.99707 16.5923 8.3125 16.5923ZM10.7695 16.5923C11.0684 16.5923 11.2759 16.4014 11.2842 16.1025L11.5415 7.229C11.5498 6.93848 11.334 6.73926 11.0186 6.73926C10.728 6.73926 10.5122 6.93018 10.5039 7.229L10.2549 16.1025C10.2466 16.3931 10.4541 16.5923 10.7695 16.5923Z" fill="black" fill-opacity="0.5"/>\\n" +
        "</svg>`,
    delete: `<svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 17.4736C13.6318 17.4736 17.4668 13.6304 17.4668 9.00684C17.4668 4.375 13.6235 0.540039 8.9917 0.540039C4.36816 0.540039 0.533203 4.375 0.533203 9.00684C0.533203 13.6304 4.37646 17.4736 9 17.4736ZM9 16.0625C5.08203 16.0625 1.95264 12.9248 1.95264 9.00684C1.95264 5.08887 5.07373 1.95117 8.9917 1.95117C12.9097 1.95117 16.0474 5.08887 16.0557 9.00684C16.064 12.9248 12.918 16.0625 9 16.0625ZM6.16113 12.5264C6.35205 12.5264 6.51807 12.4517 6.64258 12.3188L8.9917 9.95312L11.3574 12.3188C11.4819 12.4434 11.6396 12.5264 11.8306 12.5264C12.1958 12.5264 12.4946 12.2192 12.4946 11.854C12.4946 11.6631 12.4282 11.5054 12.2954 11.3809L9.93799 9.02344L12.3037 6.64941C12.4448 6.5083 12.5029 6.36719 12.5029 6.18457C12.5029 5.81104 12.2041 5.52051 11.8389 5.52051C11.6646 5.52051 11.5234 5.57861 11.3823 5.71973L8.9917 8.09375L6.62598 5.72803C6.50146 5.59521 6.35205 5.53711 6.16113 5.53711C5.7959 5.53711 5.49707 5.81934 5.49707 6.19287C5.49707 6.37549 5.57178 6.5332 5.69629 6.65771L8.05371 9.02344L5.69629 11.3892C5.57178 11.5054 5.49707 11.6714 5.49707 11.854C5.49707 12.2192 5.7959 12.5264 6.16113 12.5264Z" fill="#8E8E93"/>
        </svg>`,
    sale: `<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.44287 15.7852H13.5488C15.1841 15.7852 16.0557 14.9385 16.0557 13.3115V5.04395C16.8608 4.91113 17.2925 4.30518 17.2925 3.41699V2.15527C17.2925 1.14258 16.7363 0.503418 15.7153 0.503418H2.27637C1.30518 0.503418 0.699219 1.14258 0.699219 2.15527V3.41699C0.699219 4.30518 1.13086 4.91113 1.93604 5.04395V13.3115C1.93604 14.9468 2.80762 15.7852 4.44287 15.7852ZM2.6167 3.81543C2.20166 3.81543 2.03564 3.64111 2.03564 3.22607V2.34619C2.03564 1.93115 2.20166 1.75684 2.6167 1.75684H15.3833C15.7983 1.75684 15.9561 1.93115 15.9561 2.34619V3.22607C15.9561 3.64111 15.7983 3.81543 15.3833 3.81543H2.6167ZM4.42627 14.5317C3.6792 14.5317 3.27246 14.125 3.27246 13.3779V5.06885H14.7192V13.3779C14.7192 14.125 14.3042 14.5317 13.5654 14.5317H4.42627ZM6.26074 8.41406H11.7393C12.0879 8.41406 12.3369 8.17334 12.3369 7.80811V7.54248C12.3369 7.17725 12.0879 6.94482 11.7393 6.94482H6.26074C5.91211 6.94482 5.67139 7.17725 5.67139 7.54248V7.80811C5.67139 8.17334 5.91211 8.41406 6.26074 8.41406Z" fill="black" fill-opacity="0.5"/>
        </svg>`,
    addSale: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.81982 23.104H23.1802C24.9233 23.104 25.7866 22.2407 25.7866 20.5308V15.6167C25.7866 14.8696 25.687 14.4961 25.3135 14.0396L22.4497 10.4951C21.4785 9.2998 21.0469 8.93457 19.5693 8.93457H12.4307C10.9531 8.93457 10.5298 9.2998 9.55859 10.4951L6.68652 14.0396C6.32129 14.4961 6.21338 14.8696 6.21338 15.6167V20.5308C6.21338 22.249 7.08496 23.104 8.81982 23.104ZM16 17.7998C14.8296 17.7998 14.0742 16.7788 14.0742 15.8159V15.791C14.0742 15.4424 13.8667 15.1187 13.4351 15.1187H7.96484C7.69092 15.1187 7.63281 14.8779 7.77393 14.7036L10.8535 10.8188C11.2603 10.3042 11.7251 10.0967 12.3311 10.0967H19.6689C20.2749 10.0967 20.7397 10.3042 21.1465 10.8188L24.2344 14.7036C24.3672 14.8779 24.3174 15.1187 24.0435 15.1187H18.5649C18.1333 15.1187 17.9341 15.4424 17.9341 15.791V15.8159C17.9341 16.7788 17.1787 17.7998 16 17.7998ZM8.83643 21.7676C8.00635 21.7676 7.5498 21.3276 7.5498 20.4644V16.3306H12.8125C13.0117 17.8828 14.3149 19.0283 16 19.0283C17.6851 19.0283 18.9883 17.8745 19.1875 16.3306H24.4502V20.4644C24.4502 21.3276 23.9854 21.7676 23.1636 21.7676H8.83643Z" fill="black" fill-opacity="0.5"/>
        </svg>`,
    arrow: `<svg width="10" height="24" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg\\">n" +
            "<path d="M4.12109 5.875C4.28906 5.875 4.43359 5.80859 4.5625 5.67969L7.48828 2.67969C7.58984 2.57812 7.64453 2.45312 7.64453 2.30469C7.64453 2 7.40234 1.75781 7.10156 1.75781C6.95312 1.75781 6.8125 1.81641 6.70312 1.92578L4.125 4.58203L1.54297 1.92578C1.43359 1.82031 1.29688 1.75781 1.14453 1.75781C0.84375 1.75781 0.601562 2 0.601562 2.30469C0.601562 2.45312 0.65625 2.57812 0.757812 2.68359L3.68359 5.67969C3.82031 5.8125 3.95703 5.875 4.12109 5.875Z" fill="black" fill-opacity="0.5\"/>" +
            "</svg>`
}


// Groups -----------------------------------------


function addDrawer() {
    let drawer = document.getElementById("drawer")
    let groups = document.createElement("div")
    groups.setAttribute("class", "tabDrawer")

    getData("https://gumballsales.herokuapp.com/group/").then((response) => {
        response.forEach(item => {
            let h = document.createElement("h1")
            h.setAttribute("id", `group-${item.id}`)
            h.setAttribute("onclick", `createTab(${item.id})`)
            h.innerHTML = item.name

            groups.appendChild(h)
        })
        drawer.appendChild(groups)
        drawer.prepend(drawerMenu())
    })
}

function drawerMenu() {
    let menu = document.createElement("div")
    menu.setAttribute("class", "tabMenu")
    let options = document.createElement("div")
    let addItem = document.createElement("button")
    addItem.setAttribute("class", "btnOpt")

    addItem.innerHTML = icons.add
    addItem.onclick=function () {
        createGroupMenu()
    }

    let sales = document.createElement("button")
    sales.setAttribute("class", "btnOpt")
    sales.innerHTML = icons.sale
    sales.onclick=function () {
        if(!document.getElementById("sales")) {
            createSalesBase()
        }
    }

    options.appendChild(addItem)
    options.appendChild(sales)
    menu.appendChild(options)


    return menu
}

function createGroupMenu() {
    let drawer = document.getElementById("drawer")
    let createMenu = document.createElement("div")
    createMenu.setAttribute("class", "categoryMenu")
    let closeMenu = document.createElement("button")
    closeMenu.setAttribute("class", "close")

    let form = document.createElement("input")
    form.placeholder = "Group name"

    let addItem = document.createElement("button")
    addItem.setAttribute("class","add")
    addItem.innerHTML = "Add Item"

    addItem.onclick=async function () {
        if (form.value) {
            let items = document.getElementById("drawer").getElementsByClassName("tabDrawer")[0]
            console.log(items)
            let item = await createGroup(form.value)

            let h = document.createElement("h1")
            h.setAttribute("id", `group-${item.id}`)
            h.setAttribute("onclick", `createTab(${item.id})`)
            h.innerHTML = item.name

            items.appendChild(h)

            form.value = ''
        }
    }

    let options = document.createElement("div")
    options.setAttribute("class", "options")

    closeMenu.onclick=function () {
        let menu = document.getElementById("drawer").lastElementChild
        menu.remove()
    }

    closeMenu.innerHTML = "Close"
    createMenu.appendChild(form)
    options.appendChild(closeMenu)
    options.appendChild(addItem)
    createMenu.appendChild(options)

    drawer.appendChild(createMenu)
}


// Category -----------------------------------------


let tabsID = 0
function createTab(id) {
    let content = document.getElementById("content")

    getData(`https://gumballsales.herokuapp.com/category/${id}`).then((response) => {
        let tab = document.createElement("div")
        let category = document.createElement("div")
        category.setAttribute("class", "category")

        tab.setAttribute("class", "tab")
        category.setAttribute("id", `${++tabsID}`)

        response.forEach(item => {
            let h = document.createElement("h2")
            h.setAttribute("onclick", `createDataBase(${item.id})`)
            h.innerHTML = item.name
            tab.appendChild(h)
        })
        category.appendChild(tab)
        category.prepend(tabMenu(tabsID, id))

        content.appendChild(category)
    })
}

function tabMenu(tabsID, groupID) {
    let menu = document.createElement("div")
    menu.setAttribute("class", "tabMenu")
    let options = document.createElement("div")
    let close = document.createElement("button")
    close.setAttribute("class", "btnOpt")
    let addItem = document.createElement("button")
    addItem.setAttribute("class", "btnOpt")

    close.innerHTML = icons.close
    close.setAttribute("onclick", `removeTab(${tabsID})`)

    addItem.innerHTML = icons.add
    addItem.onclick=function () {
        createCategoryMenu(tabsID, groupID)
    }

    options.appendChild(addItem)
    options.appendChild(close)
    menu.appendChild(options)


    return menu
}

function removeTab(id) {
    let tab = document.getElementById(id)
    tab.remove()
}

function createTableHeader(sortable, data, doc) {
    let thead = document.createElement("thead")
    let tr = document.createElement("tr")
    sortable.forEach(item => {
        let th = document.createElement("th")
        th.dataset.switched = 'false'
        th.setAttribute("class", "tableHeadItem")

        let icon = document.createElement("span")
        icon.innerHTML = icons.arrow
        let name = document.createElement("span")
        name.innerHTML = item.name
        icon.setAttribute("class", "contentHeader")

        th.appendChild(name)
        th.appendChild(icon)

        th.onclick=function () {
            while(doc.lastElementChild) {
                doc.removeChild(doc.lastElementChild)
            }

            let db = sortDB(data, item.type, th)
            db.forEach(item => {
                doc.appendChild(createTableItem(item))
            })
        }
        tr.appendChild(th)
    })
    thead.appendChild(tr)
    return thead
}

function createTableItem(item) {
    let tr = document.createElement("tr")
    let deleteItem = document.createElement("div")
    deleteItem.innerHTML = icons.delete
    deleteItem.setAttribute("class", "delete")

    let createSalesItem = document.createElement("div")
    createSalesItem.innerHTML = icons.addSale
    createSalesItem.setAttribute("class", "createSalesItem")
    createSalesItem.onclick=function(){
        item = addItemToSales(item, tr)
    }

    Object.keys(item).forEach(element => {
        if(element !== "categoryID") {
            let td = document.createElement("td")
            td.innerHTML = item[element]
            tr.appendChild(td)
        }
    })

    deleteItem.onclick=async function () {
        tr.remove()
        await deleteProduct(item.id)
    }

    tr.appendChild(createSalesItem)
    tr.appendChild(deleteItem)

    return tr
}


// Products -----------------------------------------


let dbIdx = 0
function createDataBase(id) {
    let sortable = [{name: "ID", type:"id"}, {name: "Name", type: "name"},
        {name: "Price", type: "price"}, {name: "Count", type: "count"}]
    let content = document.getElementById("content")

    getData(`https://gumballsales.herokuapp.com/product/${id}`).then((response) => {
        let wrapper = document.createElement("div")
        wrapper.setAttribute("id", `db${++dbIdx}`)
        let menu = document.createElement("div")
        menu.setAttribute("class", "menu")
        let addItem = document.createElement("button")
        let closeDataBase = document.createElement("button")
        closeDataBase.innerHTML = icons.close
        closeDataBase.setAttribute("class", "btnOpt")
        addItem.setAttribute("class", "btnOpt")

        addItem.innerHTML = icons.add
        closeDataBase.setAttribute("onclick", `removeDb(db${dbIdx})`)
        addItem.onclick=function () {
            addItemMenu("db"+dbIdx, id, response)
        }
        menu.appendChild(addItem)
        menu.appendChild(closeDataBase)


        wrapper.setAttribute("class", "tableWrapper")
        let database = document.createElement("table")
        let data = document.createElement("tbody")

        response.forEach(item => {
            data.appendChild(createTableItem(item))
        })
        database.appendChild(createTableHeader(sortable, response, data))

        database.appendChild(data)
        wrapper.appendChild(database)
        wrapper.prepend(menu)
        content.appendChild(wrapper)
    })
}
function removeDb(id) {
    id.remove()
}


// Components ---------------------------------------------


function addItemMenu(elementDoc, categoryID, db) {
    let element = document.getElementById(elementDoc)
    let createMenu = document.createElement("div")
    createMenu.setAttribute("class", "categoryMenu")
    let closeMenu = document.createElement("button")
    closeMenu.innerHTML = "Close"
    closeMenu.setAttribute("class", "close")
    let addItem = document.createElement("button")
    addItem.innerHTML = "Add Item"
    addItem.setAttribute("class", "add")
    let formName = document.createElement("input")
    formName.placeholder = "Product name"

    let inputContainer = document.createElement("div")
    inputContainer.setAttribute("class", "inputContainer")
    let formPrice = document.createElement("input")
    formPrice.placeholder = "Product price"
    formPrice.setAttribute("type", "number")
    let formCount = document.createElement("input")
    formCount.setAttribute("type", "number")
    formCount.placeholder = "Product count"

    inputContainer.appendChild(formPrice)
    inputContainer.appendChild(formCount)

    closeMenu.onclick=function () {
        let menu = document.getElementById(element.id).lastElementChild.lastElementChild
        menu.remove()
    }

    addItem.onclick=async function () {
        if (formName.value && formPrice.value && formCount.value) {
            let product = await createProduct(formName.value, formPrice.value,
                formCount.value, categoryID)
            db.push(product)
            element.getElementsByTagName("tbody")[0].prepend(createTableItem(product))
        }
    }

    let options = document.createElement("div")
    options.setAttribute("class", "options")

    createMenu.appendChild(formName)
    createMenu.appendChild(inputContainer)
    options.appendChild(closeMenu)
    options.appendChild(addItem)
    createMenu.appendChild(options)

    element.lastElementChild.appendChild(createMenu)
}

function createCategoryMenu(id, groupID) {
    let tab = document.getElementById(id)
    let createMenu = document.createElement("div")
    createMenu.setAttribute("class", "categoryMenu")
    let closeMenu = document.createElement("button")
    closeMenu.setAttribute("class","close")
    let form = document.createElement("input")
    form.placeholder = "Category name"
    let addItem = document.createElement("button")
    addItem.setAttribute("class","add")
    addItem.innerHTML = "Add Item"

    closeMenu.onclick=function () {
        let menu = document.getElementById(id).lastElementChild
        menu.remove()
    }

    addItem.onclick=async function () {
        if (form.value) {
            let items = document.getElementById(id).getElementsByClassName("tab")[0]
            console.log(items)
            let item = await createCategory(form.value, groupID)

            let h = document.createElement("h2")
            h.setAttribute("onclick", `createDataBase(${item.id})`)
            h.innerHTML = item.name
            items.appendChild(h)

            form.value = ''
        }
    }

    let options = document.createElement("div")
    options.setAttribute("class", "options")

    closeMenu.innerHTML = "Close"
    createMenu.appendChild(form)
    options.appendChild(closeMenu)
    options.appendChild(addItem)
    createMenu.appendChild(options)

    tab.appendChild(createMenu)
}

function createSalesBase() {
    let sortable = [{name: "Name", type: "name"}, {name: "Price", type: "price"},
        {name: "Date", type: "date"}]
    let content = document.getElementById("content")

    getAllSales(`https://gumballsales.herokuapp.com/sales/`).then((response) => {
        let wrapper = document.createElement("div")
        wrapper.setAttribute("id", "sales")
        let menu = document.createElement("div")
        menu.setAttribute("class", "menu")
        let closeDataBase = document.createElement("button")

        closeDataBase.innerHTML = icons.close
        closeDataBase.setAttribute("class", "btnOpt")
        let income = document.createElement("h3")
        income.innerHTML = `Today income: <span>$${todayIncome(response)}</span>`

        menu.appendChild(closeDataBase)
        menu.appendChild(income)

        wrapper.setAttribute("class", "tableWrapper")
        let database = document.createElement("table")
        let data = document.createElement("tbody")

        response.forEach(item => {
            data.appendChild(createSalesItem(item))
        })
        database.appendChild(createSalesHeader(sortable, response, data))

        closeDataBase.onclick=function() {
            document.getElementById("sales").remove()
        }

        database.appendChild(data)
        wrapper.appendChild(database)
        wrapper.prepend(menu)
        content.appendChild(wrapper)
    })
}

function createSalesHeader(sortable, data, doc) {
    let thead = document.createElement("thead")
    let tr = document.createElement("tr")
    sortable.forEach(item => {
        let th = document.createElement("th")
        th.dataset.switched = 'false'
        th.setAttribute("class", "tableHeadItem")

        let icon = document.createElement("span")
        icon.innerHTML = icons.arrow
        let name = document.createElement("span")
        name.innerHTML = item.name
        icon.setAttribute("class", "contentHeader")

        th.appendChild(name)
        th.appendChild(icon)

        th.onclick=function () {
            while(doc.lastElementChild) {
                doc.removeChild(doc.lastElementChild)
            }

            let db = sortDB(data, item.type, th)
            db.forEach(item => {
                doc.appendChild(createSalesItem(item))
            })
        }
        tr.appendChild(th)
    })
    thead.appendChild(tr)
    return thead
}

function createSalesItem(item) {
    let tr = document.createElement("tr")

    Object.keys(item).forEach(element => {
        if(element !== "categoryID" && element !== "id") {
            if(element === "date") {
                let td = document.createElement("td")
                td.innerHTML = new Date(item[element]).toLocaleDateString("en-US")
                tr.appendChild(td)
            } else {
                let td = document.createElement("td")
                td.innerHTML = item[element]
                tr.appendChild(td)
            }
        }
    })

    return tr
}


// API ---------------------------------------------


function getData(url) {
    return  fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            return data
        })
}

function createGroup(name) {
    return fetch('https://gumballsales.herokuapp.com/group/', {
        method: 'POST',
        body: JSON.stringify({
            name: name
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            return json
        });
}

function createCategory(name, groupID) {
    return fetch('https://gumballsales.herokuapp.com/category/', {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            groupID: groupID
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            return json
        });
}

function createProduct(name, price, count, categoryID) {
    return fetch('https://gumballsales.herokuapp.com/product/', {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            price: price,
            count: count,
            categoryID: categoryID
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            return json
        });
}

function getAllSales() {
    return fetch('https://gumballsales.herokuapp.com/sales/', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            return json
        });
}

function deleteProduct(id) {
    return fetch('https://gumballsales.herokuapp.com/product/', {
        method: 'DELETE',
        body: JSON.stringify({
           id: id
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            return json
        });
}

function createSales(id) {
    return fetch('https://gumballsales.herokuapp.com/sales/', {
        method: 'POST',
        body: JSON.stringify({
            id: id
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            return json
        });
}


// Utils -----------------------------------------


function sortDB(db=[], type, th) {
    let switched = th.dataset.switched
    let icon = th.getElementsByClassName("contentHeader")[0].getElementsByTagName("svg")[0]

    switch (switched) {
        case "false":
            db.sort(function (a, b){
                if ( a[type] > b[type]  ){
                    return -1;
                }
                if ( a[type]  < b[type]  ) {
                    return 1;
                }
                return 0;
            })
            th.dataset.switched = "true"
            icon.style.transform = "rotate(180deg)"
            break
        case "true":
            db.sort(function (a, b){
                if ( a[type] < b[type]  ){
                    return -1;
                }
                if ( a[type]  > b[type]  ) {
                    return 1;
                }
                return 0;
            })
            th.dataset.switched = "false"
            icon.style.transform = "rotate(0deg)"
            break
    }

    return db
}

function addItemToSales(item, tr) {
    createSales(item.id).then(() => {
        if(item.count > 1) {
            item['count'] = item.count-1
            tr.getElementsByTagName("td")[3].innerHTML=item.count
        } else {
            tr.remove()
            deleteProduct(item.id).then()
        }
    })

    return item
}

function todayIncome(sales) {
    let income = 0

    sales.forEach((item) => {
        income = income + item.price
    })

    return income
}


// Start Menu -----------------------------------------


addDrawer()