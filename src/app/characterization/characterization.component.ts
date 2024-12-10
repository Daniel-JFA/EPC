import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterLinkWithHref, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-characterization',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule],
  templateUrl: './characterization.component.html',
  styleUrl: './characterization.component.scss'
})
export class CharacterizationComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  choosenComuna:string[] = []
  choosenBarrio:string[] = []
  selectedZona:string = "";
  selectedComuna:string ="";

  ComunasZona1 = ["Comuna 1 - Popular", "Comuna 2 - Santa Cruz", "Comuna 3 - Manrique", "Comuna 4 - Aranjuez"]
  ComunasZona2 = ["Comuna 5 - Castilla", "Comuna 6 - Doce de octubre", "Comuna 7 - Robledo"]
  ComunasZona3 = ["Comuna 8 - Villa Hermosa", "Comuna 9 - Buenos Aires", "Comuna 10 - La Candelaria"]
  ComunasZona4 = ["Comuna 11 - Laureles-Estadio", "Comuna 12 - La América", "Comuna 13 - San Javier"]
  ComunasZona5 = ["Comuna 14 - Poblado"]
  ComunasZona6 = ["Comuna 15 - Guayabal", "Comuna 16 - Belén"]
  Corregimientos = ["50 - San Sebastián de Palmitas", "60 - San Cristóbal", "70 - Altavista", "80 - San Antonio de Prado", "90 - Santa Elena"]


  barriosComuna1 = ["Santo Domingo Savio 1", "Santo Domingo Savio 2", "La Avanzada", "Granizal", "La Esperanza 2", "Carpinelo", "Aldea Pablo VI", "El Popular", "El Compromiso", "Moscú n.º 2", "Villa de Guadalupe", "San Pablo"]
  barriosComuna2 = ["La Isla", "El Playón de Los Comuneros", "Pablo VI", "La Frontera", "La Francia", "Andalucía", "Villa del Socorro", "Villa Niza", "Moscú Nº 1", "Santa Cruz", "La Rosa"]
  barriosComuna3 = ["La Salle", "Las Granjas", "Campo Valdes Nº 2", "Santa Inés", "El Raizal", "El Pomar", "Manrique Central No. 2", "Manrique Oriental", "Versalles Nº 1", "Versalles Nº 2", "La Cruz", "Oriente", "Maria Cano - Carambolas", "San José La Cima Nº 1", "San José La Cima Nº 2"]
  barriosComuna4 = ["Berlín", "San Isidro", "Palermo", "Bermejal – Los Álamos", "Moravia", "Sevilla", "San Pedro", "Manrique Central Nº 1", "Campo Valdes Nº 1", "Las Esmeraldas", "La Piñuela", "Aranjuez", "Brasilia", "Miranda"]
  barriosComuna5 = ["Toscana", "Las Brisas", "Florencia", "Tejelo", "Boyacá", "Héctor Abad Gómez", "Belalcazar", "Girardot", "Tricentenario", "Castilla", "Francisco Antonio Zea", "Alfonso López", "Caribe", "El Progreso"]
  barriosComuna6 = ["Santander", "Doce de Octubre Nº 1", "Doce de Octubre Nº 2", "Pedregal", "La Esperanza", "San Martín de Porres", "Kennedy", "Picacho", "Picachito", "Mirador del Doce", "Progreso Nº 2", "El Triunfo"]
  barriosComuna7 = ["Cerro El Volador", "San Germán", "Barrio Facultad de Minas Universidad Nacional", "La Pilarica", "Bosques de San Pablo", "Altamira", "Córdoba", "López de Mesa", "El Diamante", "Aures Nº 1", "Aures Nº 2", "Bello Horizonte", "Villa Flora", "Palenque", "Robledo", "Cucaracho", "Fuente Clara", "Santa Margarita", "Olaya Herrera", "Pajarito", "Monteclaro", "Nueva Villa de La Iguaná"]
  barriosComuna8 = ["Villa Hermosa", "La Mansión", "San Miguel", "La Ladera", "Batallón Girardot", "Llanaditas", "Los Mangos", "Enciso", "Sucre", "El Pinal", "Trece de Noviembre", "La Libertad", "Villatina", "San Antonio", "Las Estancias", "Villa Turbay", "La Sierra (Santa Lucía - Las Estancias)", "Villa Lilliam"]
  barriosComuna9 = ["Juan Pablo II", "Barrios de Jesús", "Bombona Nº 2", "Los Cerros El Vergel", "Alejandro Echavarría", "Barrio Caicedo", "Buenos Aires", "Miraflores", "Cataluña", "La Milagrosa", "Gerona", "El Salvador", "Loreto", "Asomadera Nº 1", "Asomadera Nº 2", "Asomadera Nº 3", "Ocho de Marzo"]
  barriosComuna10 = ["Prado", "Jesús Nazareno", "El Chagualo", "Estación Villa", "San Benito", "Guayaquil", "Corazón de Jesús", "Calle Nueva", "Perpetuo Socorro", "Barrio Colón", "Las Palmas", "Bomboná Nº 1", "Boston", "Los Ángeles", "Villa Nueva", "La Candelaria", "San Diego"]
  barriosComuna11 = ["Carlos E. Restrepo", "Suramericana", "Naranjal", "San Joaquín", "Los Conquistadores", "Bolivariana", "Laureles", "Las Acacias", "La Castellana", "Lorena", "El Velódromo", "Estadio", "Los Colores", "Cuarta Brigada", "Florida Nueva"]
  barriosComuna12 = ["Ferrini", "Calasanz", "Los Pinos", "La América", "La Floresta", "Santa Lucia", "El Danubio", "Campo Alegre", "Santa Mónica", "Barrio Cristóbal", "Simón Bolívar", "Santa Teresita", "Calasanz Parte Alta"]
  barriosComuna13 = ["El Pesebre", "Blanquizal", "Santa Rosa de Lima", "Los Alcázares", "Metropolitano", "La Pradera", "Juan XIII - La Quiebra", "San Javier Nº 2", "San Javier Nº 1", "Veinte de Julio", "Belencito", "Betania", "El Corazón", "Las Independencias", "Nuevos Conquistadores", "El Salado", "Eduardo Santos", "Antonio Nariño", "El Socorro"]
  barriosComuna14 = ["Barrio Colombia", "Simesa", "Villa Carlota", "Castropol", "Lalinde", "Las Lomas Nº 1", "Las Lomas Nº 2", "Altos del Poblado", "El Tesoro", "Los Naranjos", "Los Balsos Nº 1", "San Lucas", "El Diamante Nº 2", "El Castillo", "Los Balsos Nº 2", "Alejandría", "La Florida", "El Poblado", "Manila", "Astorga", "Patio Bonito", "La Aguacatala", "Santa María de Los Ángeles"]
  barriosComuna15 = ["Tenche", "Trinidad", "Santa Fé", "Parque Juan Pablo II", "Campo Amor", "Noel", "Cristo Rey", "Guayabal", "La Colina", "El Rodeo"]
  barriosComuna16 = ["Fátima", "Rosales", "Belén", "Granada", "San Bernardo", "Las Playas", "Diego Echevarria", "La Mota", "La Hondonada", "El Rincón", "La Loma de Los Bernal", "La Gloria", "Altavista", "La Palma", "Los Alpes", "Las Violetas", "Las Mercedes", "Nueva Villa de Aburrá", "Miravalle", "El Nogal – Los Almendros", "Cerro Nutibara"]
  barriosCorregimiento50 = ["Urquita", "La Aldea", "Potrera - Miserenga", "Palmitas cabecera", "La Sucia", "La Frisola", "La Suiza", "Volcana - Guayabala"]
  barriosCorregimiento60 = ["Uvito", "El Patio", "Boquerón", "La Ilusión", "El Carmelo", "El Yolombo", "Pajarito", "El Picacho", "Pedregal Alto", "San Cristóbal cabecera", "San José de la Montaña", "Naranjal", "La Loma", "La Palma", "Travesías", "Las Playas", "La Cuchilla"]
  barriosCorregimiento70 = ["El Jardín", "La Esperanza", "Altavista cabecera", "San José del Manzanillo", "San Pablo", "Aguas Frías", "El Corazón - El Morro", "Buga - Patio Bonito"]
  barriosCorregimiento80 = ["La Verde", "El Salado", "El Astillero", "Yarumalito", "San José", "Potrerito", "La Florida", "Montañita", "San Antonio de Prado cabecera"]
  barriosCorregimiento90 = ["El Plan", "El Placer", "Las Palmas", "Piedra Gorda", "Barro Blanco", "Piedras Blancas", "Mazo", "El Llano", "El Cerro", "Matasano", "Media Luna", "Santa Elena Cabecera"]

  chooseComuna(){
    switch (this.selectedZona) {
      case "Zona 1":
        this.choosenComuna = [...this.ComunasZona1];
        break;
      case "Zona 2":
        this.choosenComuna = [...this.ComunasZona2];
        break;
      case "Zona 3":
        this.choosenComuna = [...this.ComunasZona3];
        break;
      case "Zona 4":
        this.choosenComuna = [...this.ComunasZona4];
        break;
      case "Zona 5":
        this.choosenComuna = [...this.ComunasZona5];
        break;
      case "Zona 6":
        this.choosenComuna = [...this.ComunasZona6];
        break;
      case "Corregimientos":
        this.choosenComuna = [...this.Corregimientos];
        break;
      default:
        this.choosenComuna = [];
    }
  }

  chooseBarrio(){
    switch (this.selectedComuna) {
      case "Comuna 1 - Popular":
        this.choosenBarrio = [...this.barriosComuna1];
        break;
      case "Comuna 2 - Santa Cruz":
        this.choosenBarrio = [...this.barriosComuna2];
        break;
      case "Comuna 3 - Manrique":
        this.choosenBarrio = [...this.barriosComuna3];
        break;
      case "Comuna 4 - Aranjuez":
        this.choosenBarrio = [...this.barriosComuna4];
        break;
      case "Comuna 5 - Castilla":
        this.choosenBarrio = [...this.barriosComuna5];
        break;
      case "Comuna 6 - Doce de octubre":
        this.choosenBarrio = [...this.barriosComuna6];
        break;
      case "Comuna 7 - Robledo":
        this.choosenBarrio = [...this.barriosComuna7];
        break;
      case "Comuna 8 - Villa Hermosa":
        this.choosenBarrio = [...this.barriosComuna8];
        break;
      case "Comuna 9 - Buenos Aires":
        this.choosenBarrio = [...this.barriosComuna9];
        break;
      case "Comuna 10 - La Candelaria":
        this.choosenBarrio = [...this.barriosComuna10];
        break;
      case "Comuna 11 - Laureles-Estadio":
        this.choosenBarrio = [...this.barriosComuna11];
        break;
      case "Comuna 12 - La América":
        this.choosenBarrio = [...this.barriosComuna12];
        break;
      case "Comuna 13 - San Javier":
        this.choosenBarrio = [...this.barriosComuna13];
        break;
      case "Comuna 14 - Poblado":
        this.choosenBarrio = [...this.barriosComuna14];
        break;
      case "Comuna 15 - Guayabal":
        this.choosenBarrio = [...this.barriosComuna15];
        break;
      case "Comuna 16 - Belén":
        this.choosenBarrio = [...this.barriosComuna16];
        break;
      case "50 - San Sebastián de Palmitas":
        this.choosenBarrio = [...this.barriosCorregimiento50];
        break;
      case "60 - San Cristóbal":
        this.choosenBarrio = [...this.barriosCorregimiento60];
        break;
      case "70 - Altavista":
        this.choosenBarrio = [...this.barriosCorregimiento70];
        break;
      case "80 - San Antonio de Prado":
        this.choosenBarrio = [...this.barriosCorregimiento80];
        break;
      case "90 - Santa Elena":
        this.choosenBarrio = [...this.barriosCorregimiento90];
        break;
      default:
        this.choosenBarrio = [];
    }
  }

  guardarTodo() {
    Swal.fire({
      icon: "success",
      title: "¡Qué bien!",
      text: "Se creó un nuevo beneficiario correctamente",
      confirmButtonColor: '#14B3EE',
      iconColor: '#14B3EE',
      buttonsStyling: true
    })
    this.router.navigate(['/home'], { replaceUrl: true });
  }
}
