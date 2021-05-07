

![ferenc-almasi-cWUPyE8qggw-unsplash](https://user-images.githubusercontent.com/55043608/117419029-bdf6d900-af39-11eb-8321-4c5d2dada31e.jpg)

---

#  :star: Reactpage

<br>

## Demo project created from Scratch


![design_for_reactjs_assignment](https://user-images.githubusercontent.com/55043608/117166761-4c594680-ade4-11eb-8524-2e729deba196.jpg)

### :star: Technology Used!
- ReactJS;
 - Material UI :point_left: 
 - ReactVideoCard Component
- Vanilla CSS

<br>

### :star: How To USE!
---
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

- yarn : to dowload the packages;

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

---

#   :star:  MY ATTEMPT 
![React App (6)](https://user-images.githubusercontent.com/55043608/117178933-318ccf00-adf0-11eb-8f9f-16c030a44632.png)

### :star: Components Created from Scratch!
```js
<Sidebar />
```
```js
<Banner />
```
```js
<Videocomponent />
```
```js
<Header />
```
```js
<Card />
```

<br>
<br>


<br>
<br>

#  :star:  COMPONENTS USED - :
<br>
<br>

```js
<Sidebar />
```


![React App (2)](https://user-images.githubusercontent.com/55043608/117179145-74e73d80-adf0-11eb-8a35-c2a1448c1187.png)
<br>
<br>
```js
function Sidebar() {
  console.log(SidebarData);
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li className="row" key={key}>
              <div id="title">{val.title}</div>
              <div id="icon">{val.icon}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

```
<br>
<br>




```js
<Banner />
```

![React App (1)](https://user-images.githubusercontent.com/55043608/117179286-99431a00-adf0-11eb-9bca-104f9baeb6c8.png)

```js
export default function Banner() {
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "blanchedalmond",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }}
    >
      <div
        style={{
          width: "70%",
          height: "100%",
          padding: "10px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          color: "grey",
        }}
      >
        <div>
          <PictureInPictureIcon />
          Overview
        </div>
        <div>
          <QuestionAnswerIcon />
          QnA
        </div>
        <div>
          <MenuBookIcon />
          Notebook
        </div>
        <div>
          <NotesIcon />
          Transcript
        </div>
      </div>
    </div>
  );
}

```

![React App (3)](https://user-images.githubusercontent.com/55043608/117179216-86c8e080-adf0-11eb-96bf-2bb8087bd898.png)
<br>

<br>

     
# Header

```js
<Header />
```


![React App](https://user-images.githubusercontent.com/55043608/117179281-98aa8380-adf0-11eb-9073-db2f22d02e5c.png)


```js
export default function Header() {
  var navStyle = {
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#1e616b",
    alignItems: "center",
    height: "100%",
    color: "white",
  };
  var navLeft = {
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  var h1Style = {
    fontSize: "18px",
  };
  var h2Style = {
    fontSize: "14px",
  };

  return (
    <div
      style={{
        height: "65px",
      }}
    >
      <nav style={navStyle}>
        <div>
          <h1 style={h1Style}>
            ASP Micriservices with .NET Core for Developers
          </h1>
          <h2 style={h2Style}> Communication between microservices</h2>
        </div>
        <div style={navLeft}>
          <h2 style={{ paddingRight: "10px" }}>Leave a review</h2>
          <div style={{ paddingRight: "10px" }}>
            <ThumbUpAltIcon />
          </div>
          <div style={{ paddingRight: "10px" }}>
            <BookmarkBorderIcon />
          </div>
        </div>
      </nav>
    </div>
  );
}
```



