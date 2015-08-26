import React from 'react';
import Router from 'react-router';
import ModalActions from 'scripts/actions/modal';
import HeaderLayout from 'scripts/components/header/layout';
import TodoModal from 'scripts/components/todo/modal';

const { RouteHandler } = Router;

export default class App extends React.Component {
  componentDidMount() {
    ModalActions.show.listen(() => {
      this.refs.create.show();
    });
  }

  render() {
    return (
      <div>
        <header className="navbar navbar-static-top bs-docs-nav" id="top" role="banner">
          <HeaderLayout/>
        </header>
        <div className="container content">
          <div id="app">
            <RouteHandler/>
          </div>
          <TodoModal ref="create"/>
        </div>
      </div>
    )
  }

  static willTransitionTo(transition, params, query, callback) {
    console.log('App on Root route');
    callback();
  }
}