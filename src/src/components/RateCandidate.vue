<template>
  <div class="rating-box">
  <h1>Rate This Candidate (out of 100)</h1>
  <H2>Essays (60 points possible)</H2>
  <a href="https://quip-amazon.com/oLcxAnvbWj4y/Rewrite-the-C4-Captains-qualification-rubric">Rubric details</a>
  <p>Experience in building a club or hosting technical events: {{ experience }}/12</p>
  <Vue3StarRatings
   name="experience" 
   v-model="experience"
   :starSize="32"
   starColor="#ff9800"
   inactiveColor="#333333"
   :numberOfStars="12"
   :disableClick="false" 
  />
  
  <p>Relevant education for leading a cloud-focused student community: {{  education  }}/6</p>
  
  <Vue3StarRatings
   name="education" 
   v-model="education"
   :starSize="32"
   starColor="#ff9800"
   inactiveColor="#333333"
   :numberOfStars="6"
   :disableClick="false" 
  />
  <p>Relevant AWS technical skills: {{ skills }}/12</p>
  <Vue3StarRatings
   name="skills" 
   v-model="skills"
   :starSize="32"
   starColor="#ff9800"
   inactiveColor="#333333"
   :numberOfStars="12"
   :disableClick="false" 
  />
  <p>AWS Certification/Credential: {{  cert  }}/12</p>
  
  <Vue3StarRatings
   name="cert" 
   v-model="cert"
   :starSize="32"
   starColor="#ff9800"
   inactiveColor="#333333"
   :numberOfStars="12"
   :disableClick="false" 
  />
  <p>Letter of Approval from faculty/uni: {{  letter  }}/12</p>
  
  <Vue3StarRatings
   name="letter" 
   v-model="letter"
   :starSize="32"
   starColor="#ff9800"
   inactiveColor="#333333"
   :numberOfStars="12"
   :disableClick="false" 
  />
  <p>Completion status of application: {{  completion  }}/6</p>
  
  <Vue3StarRatings
   name="completion" 
   v-model="completion"
   :starSize="32"
   starColor="#ff9800"
   inactiveColor="#333333"
   :numberOfStars="6"
   :disableClick="false" 
  />
  <hr/>
  <H2>Video (40 points possible)</H2>
  <p>Quality of the recording with camera on: {{  vidquality  }}/10</p>
  
  <Vue3StarRatings
   name="vidquality" 
   v-model="vidquality"
   :starSize="32"
   starColor="#ff9800"
   inactiveColor="#333333"
   :numberOfStars="10"
   :disableClick="false" 
  />
  <p>Organization of the presentation: {{  vidorg  }}/10</p>
  
  <Vue3StarRatings
   name="vidorg" 
   v-model="vidorg"
   :starSize="32"
   starColor="#ff9800"
   inactiveColor="#333333"
   :numberOfStars="10"
   :disableClick="false" 
  />
  <p>Technical knowledge demonstrated: {{  vidtech  }}/10</p>
  
  <Vue3StarRatings
   name="vidtech" 
   v-model="vidtech"
   :starSize="32"
   starColor="#ff9800"
   inactiveColor="#333333"
   :numberOfStars="10"
   :disableClick="false" 
  />
  <p>Presentation quality: {{  vidpresoquality  }}/10</p>
  
  <Vue3StarRatings
   name="vidpresoquality" 
   v-model="vidpresoquality"
   :starSize="32"
   starColor="#ff9800"
   inactiveColor="#333333"
   :numberOfStars="10"
   :disableClick="false" 
  />
  
  <p>Total: {{total}}</p>
  <hr/>
  <button @click="copyText()">Copy to Clipboard</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Vue3StarRatings from "vue3-star-ratings";
import { copy } from "@stianlarsen/copy-to-clipboard";

export default defineComponent({
  components: {
    Vue3StarRatings,
  },
  data() {
    return {
      experience: 6,
      education: 3,
      cert: 6,
      letter: 6,
      completion: 3,
      skills: 6,
      vidquality: 5,
      vidorg: 5, 
      vidtech: 5,
      vidpresoquality: 5,
      total: 0
    };
  },
  watch: {
    // Watch for changes in rating1 and rating2
    experience() {
      this.updateTotal();
    },
    education() {
      this.updateTotal();
    },
    cert() {
      this.updateTotal();
    },
    letter() {
      this.updateTotal();
    },
    completion() {
      this.updateTotal();
    },
    skills() {
      this.updateTotal();
    },
    vidquality() {
      this.updateTotal();
    },
    vidorg() {
      this.updateTotal();
    },
    vidtech() {
      this.updateTotal();
    },
    vidpresoquality() {
      this.updateTotal();
    },
  },
  methods: {
    updateTotal() {
      this.total = this.experience + this.education + this.cert + this.letter + this.completion + this.skills + this.vidorg + this.vidpresoquality + this.vidquality + this.vidtech;
    },
    copyText(){
      const textToCopy = "Experience: "
        +this.experience+ "/12 | Education: " 
        +this.education+ "/6 | Skills: " 
        + this.skills + "/12 | Certification: " 
        + this.cert + "/12 | Letter: " 
        + this.letter + "/12 | Completion: " 
        + this.completion + "/6 | Video Quality: " 
        + this.vidquality + "/10 | Video Organization: " 
        + this.vidorg + "/10 | Video Technical Knowledge: " 
        + this.vidtech + "/10 | Video Presentation Quality: " 
        + this.vidpresoquality + 
        "/10 = Total: " +this.total + "/100 points possible";
      copy(textToCopy)
    }
  },
  created() {
    // Initialize total on component creation
    this.updateTotal();
  },
});
</script>

<style>
body {
  min-width: 600px; /* Set the desired minimum width */
  min-height: 600px; /* Set the desired minimum height */
}
.rating-box {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  text-align: left;
  width: 500px;
  margin: 0 auto;
}
p {
  font-size: 1.25em;
}
</style>