import React, { Component } from 'react';

export default class UserDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const UserDetail = this.props.activeUser;
  
    const detailMarkup = !UserDetail? (
      <div className="user--empty">
        <h3>Пользователь не найден!</h3>
      </div>
    ) : (
      <div className="user">
        <div className="user__caption">
          Выбран пользователь:
          <h3>{UserDetail.get('firstName')} {UserDetail.get('lastName')}</h3>
        </div>
        <div className="user__row">
          Описание:<br/>
          <textarea rows="6" defaultValue={UserDetail.get('description')}></textarea>
        </div>
        <div className="user__row">
          Адрес проживания: <b>{UserDetail.get('address').get('streetAddress')}</b>
        </div>
        <div className="user__row">
          Город: <b>{UserDetail.get('address').get('city')}</b>
        </div>
        <div className="user__row">
          Провинция/штат: <b>{UserDetail.get('address').get('state')}</b>
        </div>
        <div className="user__row">
          Индекс: <b>{UserDetail.get('address').get('zip')}</b>
        </div>
      </div>
    );

    const loading = <span>Загрузка...</span>;

    return this.props.isFetching ? loading : detailMarkup;
  }
}
