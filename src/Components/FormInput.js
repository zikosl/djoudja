import React, { Component } from 'react'
export default class FormInput extends Component {
    state = {
        nom: '',
        age: '',
        ville: '',
        items: [],
    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            nom: '',
            age: '',
            ville: '',
            items: [...this.state.items, { nom: this.state.nom, age: this.state.age, ville: this.state.ville }]
        })

    }
    renderCard = () => {
        return this.state.items.map((item, index) => {
            return (
                <div className='card mb-3' key={index}>
                    <div className='card-body'>
                        <h2>{item.nom}</h2>
                        <hr />
                        <p>
                            tu as {item.age}
                        </p>
                        <p>
                            tu vis a {item.ville}
                        </p>
                    </div>
                </div>
            )

        })
    }


    render() {
        return (



            <div>

                <div className='card my-3'>
                    <div className='Card-header'>
                        <h1>Publier une annonce</h1>
                        <h3>Description</h3>  </div>
                    <div className='card-body'>
                        <form onSubmit={this.onSubmit}>
                            <div className='form-group'>
                                <label for="nom">Catégorie</label>
                                <input type="text"
                                    className='form-control form-control-lg'
                                    name='nom'
                                    onChange={this.onChange}
                                    value={this.state.nom} />
                            </div>
                            <div className='form-group'>
                                <label for="nom">Age</label>
                                <input type="text"
                                    className='form-control form-control-lg'
                                    name='Age'
                                    onChange={this.onChange}
                                    value={this.state.Age} />
                            </div>
                            <div className='form-group'>
                                <label for="nom">ville</label>
                                <input type="text"
                                    className='form-control form-control-lg'
                                    name='ville'
                                    onChange={this.onChange}
                                    value={this.state.ville} />
                            </div>
                            <div className='form-group'>
                                <label for="nom">ville</label>
                                <input type="text"
                                    className='form-control form-control-lg'
                                    name='ville'
                                    onChange={this.onChange}
                                    value={this.state.ville} />
                            </div>
                            <div className='form-group'>
                                <label for="nom">ville</label>
                                <input type="text"
                                    className='form-control form-control-lg'
                                    name='ville'
                                    onChange={this.onChange}
                                    value={this.state.ville} />
                            </div>
                            <button className='btn btn-primary btn-block '>Creer votre annonce</button>
                        </form>
                    </div>
                </div>
                {this.renderCard()}
            </div>
        )
    }
}