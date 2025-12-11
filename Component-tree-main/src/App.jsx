import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";

class App extends Component {
  // Може да използваме state в класов компонент (разрешено)
  state = {
    posts: [
      { id: 1, title: "React Basics", description: "Въведение в React компоненти." },
      { id: 2, title: "Component Tree", description: "Как компонентите създават дървовидна структура." },
      { id: 3, title: "Props and State", description: "Предаване на данни надолу по дървото." }
    ]
  };

  render() {
    return (
      <>
        <Header />
        <Main posts={this.state.posts} />
        <Footer />
      </>
    );
  }
}

export default App;

