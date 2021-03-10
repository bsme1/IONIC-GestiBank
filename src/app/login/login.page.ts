import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { User } from '../entities/models';
import { UsersService } from '../users.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  motdepasse: string;
  user: User;
  users: User[];
  

  constructor(
    private service: UsersService,
    private router: Router,
    public toastController :ToastController ,
    public alertController: AlertController) { }

  ngOnInit() {}

  async erreurAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Problème authentification',
      message: 'Login ou mot de passe invalide.',
      buttons: ['Return']
    });

    await alert.present();
  }

  async clientAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Bienvenue',
      message:
        'Bienvenue dans votre espace Client.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async adminAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Bienvenue',
      message:
        'Bienvenue dans votre espace Administrateur',
      buttons: ['OK'],
    });

    await alert.present();
  }


  public submit(addform) {
    this.email = addform.value.email;
    this.motdepasse = addform.value.motdepasse;

    this.service.getUsersByMail(this.email).subscribe((response) => {
      this.user = <User>response;
      console.log(response)
      if (this.user != null) {
        
        console.log("motdepasse" + this.motdepasse)
        console.log("user.motdepasee" + this.user.motdepasse)
        if (this.motdepasse === this.user.motdepasse) {
      
          switch (this.user.role) {
            case 'CLIENT': {
              this.router.navigate(['/client']);
              this.clientAlert();
              break;
            }
            case 'ADMIN': {
              this.router.navigate(['/admin']);
              this.adminAlert();
              break;
            }
          }
        } else {
          this.erreurAlert();
          console.log(1)
        }
      } else {
        this.erreurAlert();
        console.log(2)
      }
    });
  }
}


