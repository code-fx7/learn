import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SliderImage } from '../../ui/slider-images/slider-images.component';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'



@Component({
  selector: 'app-landingpage',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit {

  newsletter! : FormGroup;
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
    const email = this.newsletter.value.newsletter;
    console.log("Test newsletter input: " + email);

    this.newsletter.reset();
  }
}
