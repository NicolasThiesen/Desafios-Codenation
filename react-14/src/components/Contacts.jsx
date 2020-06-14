import React from "react";
import Contact from "./Contact";
import axios from 'axios'

class Contacts extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: [],
			lista_consulta: [],
			search: "",
		};
	}
	filter(filter){
		let data;
		if(filter === "name"){
			data = this.state.data.filter((contact) => contact.name.includes(this.props.search))
		}else if(filter === "country"){
			data = this.state.data.filter((contact) => contact.country.includes(this.props.search))
		}else if(filter === "company"){
			data = this.state.data.filter((contact) => contact.company.includes(this.props.search))
		}else if(filter === "department"){
			data = this.state.data.filter((contact) => contact.department.includes(this.props.search))
		}else if(filter === "admissionDate"){
			data = this.state.data.filter((contact) => contact.admissionDate.includes(this.props.search))
		}
		return data
	}
	async getData(){
		const res = await axios.get("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
		console.log("get data sendo chamado...")
		this.setState({data: res.data,lista_consulta: res.data})
	}
	async componentDidMount(){
		await this.getData();
	}
	async componentDidUpdate (){
		console.log(this.state.lista_consulta)
		if(this.props.search !== "" && this.state.search !== this.props.search){
			let data = this.filter(this.props.filter);
			this.setState({lista_consulta: data, search: this.props.search})
		}else if(this.props.search === "" && this.state.data.length >this.state.lista_consulta.length){
			console.log(this.props.search);
			this.setState({lista_consulta: this.state.data})
		}
	}
	render(props) {
		return (
			<div className="container" data-testid="contacts">
				<section >
					<article className="container contact" data-testid="contact">
						<span className="contact__avatar" />
						<span className="contact__data">Nome</span>
						<span className="contact__data">Telefone</span>
						<span className="contact__data">País</span>
						<span className="contact__data">Admissão</span>
						<span className="contact__data">Empresa</span>
						<span className="contact__data">Departamento</span>
					</article>  
						{
							this.state.data.length !== 0 ? this.state.lista_consulta.map(contact => (
								<Contact data={contact}/>
							))
							: null
						}
				</section>
			</div>
		);
	}
}

export default Contacts;
