import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Collaboration software for software, IT and business team';

  openYouTubeVideo() {
    const VIDEO_URL = 'https://www.youtube.com/watch?v=r7COWvxlN5g'; // Replace with the actual video URL
    window.open(VIDEO_URL, '_blank');
  }

  openLocalHTMLPage() {
    const LOCAL_HTML_PATH = 'try-now.html'; // Replace with the actual path to your local HTML file
    const win = window.open(LOCAL_HTML_PATH, '_blank');
    if (win) {
      win.focus();
    } else {
      alert('Please allow pop-ups in your browser settings to view the local HTML page.');
    }
  }
  


}
