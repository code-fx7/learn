import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SliderImage } from 'src/app/components/slider-images/slider-images.component';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'



@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})

export class LandingpageComponent {

  newsletter : FormGroup;
  facebook = faFacebook;
  twitter = faTwitter;
  instagram = faInstagram;

  images: SliderImage[] = [
    {
      source: './assets/images/hammer.jpg',
      alt: '00'
    }
  ]

  ngOnInit(): void {
    this.newsletter = new FormGroup({
      'newsletter': new FormControl('', [Validators.required, Validators.email])
    })
  }

  onSubmit(){
    let email = this.newsletter.value.newsletter;
    console.log("Test newsletter input: " + email);

    this.newsletter.reset();
  }
}
