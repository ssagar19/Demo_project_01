
#  :star: Demo_project_01
<br>
Demo project created using Scratch

![design_for_reactjs_assignment](https://user-images.githubusercontent.com/55043608/117166761-4c594680-ade4-11eb-8524-2e729deba196.jpg)

### :star: Technology Used!
- ReactJS;
 - Material UI :point_left: 
 - ReactVideoCard Component
- Vanilla CSS

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


# AN ATTEMPT TO CREATE SAME PAGE AS ABOVE 
<br>
<br>


<br>
<br>
# COMPONENTS USED - :
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

![React App (3)](https://user-images.githubusercontent.com/55043608/117179216-86c8e080-adf0-11eb-96bf-2bb8087bd898.png)
<br>

<br>
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
![React App](https://user-images.githubusercontent.com/55043608/117179281-98aa8380-adf0-11eb-9073-db2f22d02e5c.png)
<br>
<br>

```js
function Videocomponent() {
  return (
    <div className="videoComponent">
      <ReactPlayer
        width="100%"
        height="60vh"
        controls
        url="https://www.youtube.com/watch?v=SMKPKGW083c"
      />
    </div>
  );
}

```
<br>

![React App (1)](https://user-images.githubusercontent.com/55043608/117179286-99431a00-adf0-11eb-9bca-104f9baeb6c8.png)
<br>
![React App (5)](https://user-images.githubusercontent.com/55043608/117178082-4e74d280-adef-11eb-8145-89a56adad9f0.png)

<br>
<br>
<br>


