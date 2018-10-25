import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '100%',
  },
});
function GamingPrefsForm(props) {
  const {
    username, email, timeZone, country, classes, handleChange,
  } = props;

  return (
    <div>
      <form className={classes.container} autoComplete="off">
        <TextField
          id="txt-username"
          label="Username"
          className={classes.textField}
          value={username}
          onChange={handleChange('username')}
          margin="normal"
          required
        />

        <TextField
          id="txt-email"
          label="Email"
          className={classes.textField}
          value={email}
          onChange={handleChange('email')}
          margin="normal"
          required
        />

        <FormControl className={classes.textField} margin="normal">
          <InputLabel htmlFor="slct-time-zone">Time Zone</InputLabel>
          <Select
            value={timeZone}
            onChange={handleChange('timeZone')}
            inputProps={{
              name: 'slct-time-zone',
              id: 'slct-time-zone',
            }}
          >
            <MenuItem timeZoneId="1" gmtAdjustment="GMT-12:00" useDaylightTime="0" value="-12">(GMT-12:00) International Date Line West</MenuItem>
            <MenuItem timeZoneId="2" gmtAdjustment="GMT-11:00" useDaylightTime="0" value="-11">(GMT-11:00) Midway Island, Samoa</MenuItem>
            <MenuItem timeZoneId="3" gmtAdjustment="GMT-10:00" useDaylightTime="0" value="-10">(GMT-10:00) Hawaii</MenuItem>
            <MenuItem timeZoneId="4" gmtAdjustment="GMT-09:00" useDaylightTime="1" value="-9">(GMT-09:00) Alaska</MenuItem>
            <MenuItem timeZoneId="5" gmtAdjustment="GMT-08:00" useDaylightTime="1" value="-8">(GMT-08:00) Pacific Time (US & Canada)</MenuItem>
            <MenuItem timeZoneId="6" gmtAdjustment="GMT-08:00" useDaylightTime="1" value="-8">(GMT-08:00) Tijuana, Baja California</MenuItem>
            <MenuItem timeZoneId="7" gmtAdjustment="GMT-07:00" useDaylightTime="0" value="-7">(GMT-07:00) Arizona</MenuItem>
            <MenuItem timeZoneId="8" gmtAdjustment="GMT-07:00" useDaylightTime="1" value="-7">(GMT-07:00) Chihuahua, La Paz, Mazatlan</MenuItem>
            <MenuItem timeZoneId="9" gmtAdjustment="GMT-07:00" useDaylightTime="1" value="-7">(GMT-07:00) Mountain Time (US & Canada)</MenuItem>
            <MenuItem timeZoneId="10" gmtAdjustment="GMT-06:00" useDaylightTime="0" value="-6">(GMT-06:00) Central America</MenuItem>
            <MenuItem timeZoneId="11" gmtAdjustment="GMT-06:00" useDaylightTime="1" value="-6">(GMT-06:00) Central Time (US & Canada)</MenuItem>
            <MenuItem timeZoneId="12" gmtAdjustment="GMT-06:00" useDaylightTime="1" value="-6">(GMT-06:00) Guadalajara, Mexico City, Monterrey</MenuItem>
            <MenuItem timeZoneId="13" gmtAdjustment="GMT-06:00" useDaylightTime="0" value="-6">(GMT-06:00) Saskatchewan</MenuItem>
            <MenuItem timeZoneId="14" gmtAdjustment="GMT-05:00" useDaylightTime="0" value="-5">(GMT-05:00) Bogota, Lima, Quito, Rio Branco</MenuItem>
            <MenuItem timeZoneId="15" gmtAdjustment="GMT-05:00" useDaylightTime="1" value="-5">(GMT-05:00) Eastern Time (US & Canada)</MenuItem>
            <MenuItem timeZoneId="16" gmtAdjustment="GMT-05:00" useDaylightTime="1" value="-5">(GMT-05:00) Indiana (East)</MenuItem>
            <MenuItem timeZoneId="17" gmtAdjustment="GMT-04:00" useDaylightTime="1" value="-4">(GMT-04:00) Atlantic Time (Canada)</MenuItem>
            <MenuItem timeZoneId="18" gmtAdjustment="GMT-04:00" useDaylightTime="0" value="-4">(GMT-04:00) Caracas, La Paz</MenuItem>
            <MenuItem timeZoneId="19" gmtAdjustment="GMT-04:00" useDaylightTime="0" value="-4">(GMT-04:00) Manaus</MenuItem>
            <MenuItem timeZoneId="20" gmtAdjustment="GMT-04:00" useDaylightTime="1" value="-4">(GMT-04:00) Santiago</MenuItem>
            <MenuItem timeZoneId="21" gmtAdjustment="GMT-03:30" useDaylightTime="1" value="-3.5">(GMT-03:30) Newfoundland</MenuItem>
            <MenuItem timeZoneId="22" gmtAdjustment="GMT-03:00" useDaylightTime="1" value="-3">(GMT-03:00) Brasilia</MenuItem>
            <MenuItem timeZoneId="23" gmtAdjustment="GMT-03:00" useDaylightTime="0" value="-3">(GMT-03:00) Buenos Aires, Georgetown</MenuItem>
            <MenuItem timeZoneId="24" gmtAdjustment="GMT-03:00" useDaylightTime="1" value="-3">(GMT-03:00) Greenland</MenuItem>
            <MenuItem timeZoneId="25" gmtAdjustment="GMT-03:00" useDaylightTime="1" value="-3">(GMT-03:00) Montevideo</MenuItem>
            <MenuItem timeZoneId="26" gmtAdjustment="GMT-02:00" useDaylightTime="1" value="-2">(GMT-02:00) Mid-Atlantic</MenuItem>
            <MenuItem timeZoneId="27" gmtAdjustment="GMT-01:00" useDaylightTime="0" value="-1">(GMT-01:00) Cape Verde Is.</MenuItem>
            <MenuItem timeZoneId="28" gmtAdjustment="GMT-01:00" useDaylightTime="1" value="-1">(GMT-01:00) Azores</MenuItem>
            <MenuItem timeZoneId="29" gmtAdjustment="GMT+00:00" useDaylightTime="0" value="0">(GMT+00:00) Casablanca, Monrovia, Reykjavik</MenuItem>
            <MenuItem timeZoneId="30" gmtAdjustment="GMT+00:00" useDaylightTime="1" value="0">(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London</MenuItem>
            <MenuItem timeZoneId="31" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</MenuItem>
            <MenuItem timeZoneId="32" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</MenuItem>
            <MenuItem timeZoneId="33" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Brussels, Copenhagen, Madrid, Paris</MenuItem>
            <MenuItem timeZoneId="34" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb</MenuItem>
            <MenuItem timeZoneId="35" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) West Central Africa</MenuItem>
            <MenuItem timeZoneId="36" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Amman</MenuItem>
            <MenuItem timeZoneId="37" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Athens, Bucharest, Istanbul</MenuItem>
            <MenuItem timeZoneId="38" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Beirut</MenuItem>
            <MenuItem timeZoneId="39" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Cairo</MenuItem>
            <MenuItem timeZoneId="40" gmtAdjustment="GMT+02:00" useDaylightTime="0" value="2">(GMT+02:00) Harare, Pretoria</MenuItem>
            <MenuItem timeZoneId="41" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</MenuItem>
            <MenuItem timeZoneId="42" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Jerusalem</MenuItem>
            <MenuItem timeZoneId="43" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Minsk</MenuItem>
            <MenuItem timeZoneId="44" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Windhoek</MenuItem>
            <MenuItem timeZoneId="45" gmtAdjustment="GMT+03:00" useDaylightTime="0" value="3">(GMT+03:00) Kuwait, Riyadh, Baghdad</MenuItem>
            <MenuItem timeZoneId="46" gmtAdjustment="GMT+03:00" useDaylightTime="1" value="3">(GMT+03:00) Moscow, St. Petersburg, Volgograd</MenuItem>
            <MenuItem timeZoneId="47" gmtAdjustment="GMT+03:00" useDaylightTime="0" value="3">(GMT+03:00) Nairobi</MenuItem>
            <MenuItem timeZoneId="48" gmtAdjustment="GMT+03:00" useDaylightTime="0" value="3">(GMT+03:00) Tbilisi</MenuItem>
            <MenuItem timeZoneId="49" gmtAdjustment="GMT+03:30" useDaylightTime="1" value="3.5">(GMT+03:30) Tehran</MenuItem>
            <MenuItem timeZoneId="50" gmtAdjustment="GMT+04:00" useDaylightTime="0" value="4">(GMT+04:00) Abu Dhabi, Muscat</MenuItem>
            <MenuItem timeZoneId="51" gmtAdjustment="GMT+04:00" useDaylightTime="1" value="4">(GMT+04:00) Baku</MenuItem>
            <MenuItem timeZoneId="52" gmtAdjustment="GMT+04:00" useDaylightTime="1" value="4">(GMT+04:00) Yerevan</MenuItem>
            <MenuItem timeZoneId="53" gmtAdjustment="GMT+04:30" useDaylightTime="0" value="4.5">(GMT+04:30) Kabul</MenuItem>
            <MenuItem timeZoneId="54" gmtAdjustment="GMT+05:00" useDaylightTime="1" value="5">(GMT+05:00) Yekaterinburg</MenuItem>
            <MenuItem timeZoneId="55" gmtAdjustment="GMT+05:00" useDaylightTime="0" value="5">(GMT+05:00) Islamabad, Karachi, Tashkent</MenuItem>
            <MenuItem timeZoneId="56" gmtAdjustment="GMT+05:30" useDaylightTime="0" value="5.5">(GMT+05:30) Sri Jayawardenapura</MenuItem>
            <MenuItem timeZoneId="57" gmtAdjustment="GMT+05:30" useDaylightTime="0" value="5.5">(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</MenuItem>
            <MenuItem timeZoneId="58" gmtAdjustment="GMT+05:45" useDaylightTime="0" value="5.75">(GMT+05:45) Kathmandu</MenuItem>
            <MenuItem timeZoneId="59" gmtAdjustment="GMT+06:00" useDaylightTime="1" value="6">(GMT+06:00) Almaty, Novosibirsk</MenuItem>
            <MenuItem timeZoneId="60" gmtAdjustment="GMT+06:00" useDaylightTime="0" value="6">(GMT+06:00) Astana, Dhaka</MenuItem>
            <MenuItem timeZoneId="61" gmtAdjustment="GMT+06:30" useDaylightTime="0" value="6.5">(GMT+06:30) Yangon (Rangoon)</MenuItem>
            <MenuItem timeZoneId="62" gmtAdjustment="GMT+07:00" useDaylightTime="0" value="7">(GMT+07:00) Bangkok, Hanoi, Jakarta</MenuItem>
            <MenuItem timeZoneId="63" gmtAdjustment="GMT+07:00" useDaylightTime="1" value="7">(GMT+07:00) Krasnoyarsk</MenuItem>
            <MenuItem timeZoneId="64" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi</MenuItem>
            <MenuItem timeZoneId="65" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Kuala Lumpur, Singapore</MenuItem>
            <MenuItem timeZoneId="66" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Irkutsk, Ulaan Bataar</MenuItem>
            <MenuItem timeZoneId="67" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Perth</MenuItem>
            <MenuItem timeZoneId="68" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Taipei</MenuItem>
            <MenuItem timeZoneId="69" gmtAdjustment="GMT+09:00" useDaylightTime="0" value="9">(GMT+09:00) Osaka, Sapporo, Tokyo</MenuItem>
            <MenuItem timeZoneId="70" gmtAdjustment="GMT+09:00" useDaylightTime="0" value="9">(GMT+09:00) Seoul</MenuItem>
            <MenuItem timeZoneId="71" gmtAdjustment="GMT+09:00" useDaylightTime="1" value="9">(GMT+09:00) Yakutsk</MenuItem>
            <MenuItem timeZoneId="72" gmtAdjustment="GMT+09:30" useDaylightTime="0" value="9.5">(GMT+09:30) Adelaide</MenuItem>
            <MenuItem timeZoneId="73" gmtAdjustment="GMT+09:30" useDaylightTime="0" value="9.5">(GMT+09:30) Darwin</MenuItem>
            <MenuItem timeZoneId="74" gmtAdjustment="GMT+10:00" useDaylightTime="0" value="10">(GMT+10:00) Brisbane</MenuItem>
            <MenuItem timeZoneId="75" gmtAdjustment="GMT+10:00" useDaylightTime="1" value="10">(GMT+10:00) Canberra, Melbourne, Sydney</MenuItem>
            <MenuItem timeZoneId="76" gmtAdjustment="GMT+10:00" useDaylightTime="1" value="10">(GMT+10:00) Hobart</MenuItem>
            <MenuItem timeZoneId="77" gmtAdjustment="GMT+10:00" useDaylightTime="0" value="10">(GMT+10:00) Guam, Port Moresby</MenuItem>
            <MenuItem timeZoneId="78" gmtAdjustment="GMT+10:00" useDaylightTime="1" value="10">(GMT+10:00) Vladivostok</MenuItem>
            <MenuItem timeZoneId="79" gmtAdjustment="GMT+11:00" useDaylightTime="1" value="11">(GMT+11:00) Magadan, Solomon Is., New Caledonia</MenuItem>
            <MenuItem timeZoneId="80" gmtAdjustment="GMT+12:00" useDaylightTime="1" value="12">(GMT+12:00) Auckland, Wellington</MenuItem>
            <MenuItem timeZoneId="81" gmtAdjustment="GMT+12:00" useDaylightTime="0" value="12">(GMT+12:00) Fiji, Kamchatka, Marshall Is.</MenuItem>
            <MenuItem timeZoneId="82" gmtAdjustment="GMT+13:00" useDaylightTime="0" value="13">(GMT+13:00) Nuku&apos; alofa</MenuItem>
          </Select>
          <FormHelperText>Helps us get you better matches!</FormHelperText>
        </FormControl>


        <FormControl className={classes.textField} margin="normal">
          <InputLabel htmlFor="slct-country">Counry</InputLabel>
          <Select
            value={country}
            onChange={handleChange('country')}
            inputProps={{
              name: 'slct-country',
              id: 'slct-country',
            }}
          >
            <MenuItem value="Afganistan">Afghanistan</MenuItem>
            <MenuItem value="Albania">Albania</MenuItem>
            <MenuItem value="Algeria">Algeria</MenuItem>
            <MenuItem value="American Samoa">American Samoa</MenuItem>
            <MenuItem value="Andorra">Andorra</MenuItem>
            <MenuItem value="Angola">Angola</MenuItem>
            <MenuItem value="Anguilla">Anguilla</MenuItem>
            <MenuItem value="Antigua &amp; Barbuda">Antigua &amp; Barbuda</MenuItem>
            <MenuItem value="Argentina">Argentina</MenuItem>
            <MenuItem value="Armenia">Armenia</MenuItem>
            <MenuItem value="Aruba">Aruba</MenuItem>
            <MenuItem value="Australia">Australia</MenuItem>
            <MenuItem value="Austria">Austria</MenuItem>
            <MenuItem value="Azerbaijan">Azerbaijan</MenuItem>
            <MenuItem value="Bahamas">Bahamas</MenuItem>
            <MenuItem value="Bahrain">Bahrain</MenuItem>
            <MenuItem value="Bangladesh">Bangladesh</MenuItem>
            <MenuItem value="Barbados">Barbados</MenuItem>
            <MenuItem value="Belarus">Belarus</MenuItem>
            <MenuItem value="Belgium">Belgium</MenuItem>
            <MenuItem value="Belize">Belize</MenuItem>
            <MenuItem value="Benin">Benin</MenuItem>
            <MenuItem value="Bermuda">Bermuda</MenuItem>
            <MenuItem value="Bhutan">Bhutan</MenuItem>
            <MenuItem value="Bolivia">Bolivia</MenuItem>
            <MenuItem value="Bonaire">Bonaire</MenuItem>
            <MenuItem value="Bosnia &amp; Herzegovina">Bosnia &amp; Herzegovina</MenuItem>
            <MenuItem value="Botswana">Botswana</MenuItem>
            <MenuItem value="Brazil">Brazil</MenuItem>
            <MenuItem value="British Indian Ocean Ter">British Indian Ocean Ter</MenuItem>
            <MenuItem value="Brunei">Brunei</MenuItem>
            <MenuItem value="Bulgaria">Bulgaria</MenuItem>
            <MenuItem value="Burkina Faso">Burkina Faso</MenuItem>
            <MenuItem value="Burundi">Burundi</MenuItem>
            <MenuItem value="Cambodia">Cambodia</MenuItem>
            <MenuItem value="Cameroon">Cameroon</MenuItem>
            <MenuItem value="Canada">Canada</MenuItem>
            <MenuItem value="Canary Islands">Canary Islands</MenuItem>
            <MenuItem value="Cape Verde">Cape Verde</MenuItem>
            <MenuItem value="Cayman Islands">Cayman Islands</MenuItem>
            <MenuItem value="Central African Republic">Central African Republic</MenuItem>
            <MenuItem value="Chad">Chad</MenuItem>
            <MenuItem value="Channel Islands">Channel Islands</MenuItem>
            <MenuItem value="Chile">Chile</MenuItem>
            <MenuItem value="China">China</MenuItem>
            <MenuItem value="Christmas Island">Christmas Island</MenuItem>
            <MenuItem value="Cocos Island">Cocos Island</MenuItem>
            <MenuItem value="Colombia">Colombia</MenuItem>
            <MenuItem value="Comoros">Comoros</MenuItem>
            <MenuItem value="Congo">Congo</MenuItem>
            <MenuItem value="Cook Islands">Cook Islands</MenuItem>
            <MenuItem value="Costa Rica">Costa Rica</MenuItem>
            <MenuItem value="Cote DIvoire">Cote D&apos;Ivoire</MenuItem>
            <MenuItem value="Croatia">Croatia</MenuItem>
            <MenuItem value="Cuba">Cuba</MenuItem>
            <MenuItem value="Curaco">Curacao</MenuItem>
            <MenuItem value="Cyprus">Cyprus</MenuItem>
            <MenuItem value="Czech Republic">Czech Republic</MenuItem>
            <MenuItem value="Denmark">Denmark</MenuItem>
            <MenuItem value="Djibouti">Djibouti</MenuItem>
            <MenuItem value="Dominica">Dominica</MenuItem>
            <MenuItem value="Dominican Republic">Dominican Republic</MenuItem>
            <MenuItem value="East Timor">East Timor</MenuItem>
            <MenuItem value="Ecuador">Ecuador</MenuItem>
            <MenuItem value="Egypt">Egypt</MenuItem>
            <MenuItem value="El Salvador">El Salvador</MenuItem>
            <MenuItem value="Equatorial Guinea">Equatorial Guinea</MenuItem>
            <MenuItem value="Eritrea">Eritrea</MenuItem>
            <MenuItem value="Estonia">Estonia</MenuItem>
            <MenuItem value="Ethiopia">Ethiopia</MenuItem>
            <MenuItem value="Falkland Islands">Falkland Islands</MenuItem>
            <MenuItem value="Faroe Islands">Faroe Islands</MenuItem>
            <MenuItem value="Fiji">Fiji</MenuItem>
            <MenuItem value="Finland">Finland</MenuItem>
            <MenuItem value="France">France</MenuItem>
            <MenuItem value="French Guiana">French Guiana</MenuItem>
            <MenuItem value="French Polynesia">French Polynesia</MenuItem>
            <MenuItem value="French Southern Ter">French Southern Ter</MenuItem>
            <MenuItem value="Gabon">Gabon</MenuItem>
            <MenuItem value="Gambia">Gambia</MenuItem>
            <MenuItem value="Georgia">Georgia</MenuItem>
            <MenuItem value="Germany">Germany</MenuItem>
            <MenuItem value="Ghana">Ghana</MenuItem>
            <MenuItem value="Gibraltar">Gibraltar</MenuItem>
            <MenuItem value="Great Britain">Great Britain</MenuItem>
            <MenuItem value="Greece">Greece</MenuItem>
            <MenuItem value="Greenland">Greenland</MenuItem>
            <MenuItem value="Grenada">Grenada</MenuItem>
            <MenuItem value="Guadeloupe">Guadeloupe</MenuItem>
            <MenuItem value="Guam">Guam</MenuItem>
            <MenuItem value="Guatemala">Guatemala</MenuItem>
            <MenuItem value="Guinea">Guinea</MenuItem>
            <MenuItem value="Guyana">Guyana</MenuItem>
            <MenuItem value="Haiti">Haiti</MenuItem>
            <MenuItem value="Hawaii">Hawaii</MenuItem>
            <MenuItem value="Honduras">Honduras</MenuItem>
            <MenuItem value="Hong Kong">Hong Kong</MenuItem>
            <MenuItem value="Hungary">Hungary</MenuItem>
            <MenuItem value="Iceland">Iceland</MenuItem>
            <MenuItem value="India">India</MenuItem>
            <MenuItem value="Indonesia">Indonesia</MenuItem>
            <MenuItem value="Iran">Iran</MenuItem>
            <MenuItem value="Iraq">Iraq</MenuItem>
            <MenuItem value="Ireland">Ireland</MenuItem>
            <MenuItem value="Isle of Man">Isle of Man</MenuItem>
            <MenuItem value="Israel">Israel</MenuItem>
            <MenuItem value="Italy">Italy</MenuItem>
            <MenuItem value="Jamaica">Jamaica</MenuItem>
            <MenuItem value="Japan">Japan</MenuItem>
            <MenuItem value="Jordan">Jordan</MenuItem>
            <MenuItem value="Kazakhstan">Kazakhstan</MenuItem>
            <MenuItem value="Kenya">Kenya</MenuItem>
            <MenuItem value="Kiribati">Kiribati</MenuItem>
            <MenuItem value="Korea North">Korea North</MenuItem>
            <MenuItem value="Korea Sout">Korea South</MenuItem>
            <MenuItem value="Kuwait">Kuwait</MenuItem>
            <MenuItem value="Kyrgyzstan">Kyrgyzstan</MenuItem>
            <MenuItem value="Laos">Laos</MenuItem>
            <MenuItem value="Latvia">Latvia</MenuItem>
            <MenuItem value="Lebanon">Lebanon</MenuItem>
            <MenuItem value="Lesotho">Lesotho</MenuItem>
            <MenuItem value="Liberia">Liberia</MenuItem>
            <MenuItem value="Libya">Libya</MenuItem>
            <MenuItem value="Liechtenstein">Liechtenstein</MenuItem>
            <MenuItem value="Lithuania">Lithuania</MenuItem>
            <MenuItem value="Luxembourg">Luxembourg</MenuItem>
            <MenuItem value="Macau">Macau</MenuItem>
            <MenuItem value="Macedonia">Macedonia</MenuItem>
            <MenuItem value="Madagascar">Madagascar</MenuItem>
            <MenuItem value="Malaysia">Malaysia</MenuItem>
            <MenuItem value="Malawi">Malawi</MenuItem>
            <MenuItem value="Maldives">Maldives</MenuItem>
            <MenuItem value="Mali">Mali</MenuItem>
            <MenuItem value="Malta">Malta</MenuItem>
            <MenuItem value="Marshall Islands">Marshall Islands</MenuItem>
            <MenuItem value="Martinique">Martinique</MenuItem>
            <MenuItem value="Mauritania">Mauritania</MenuItem>
            <MenuItem value="Mauritius">Mauritius</MenuItem>
            <MenuItem value="Mayotte">Mayotte</MenuItem>
            <MenuItem value="Mexico">Mexico</MenuItem>
            <MenuItem value="Midway Islands">Midway Islands</MenuItem>
            <MenuItem value="Moldova">Moldova</MenuItem>
            <MenuItem value="Monaco">Monaco</MenuItem>
            <MenuItem value="Mongolia">Mongolia</MenuItem>
            <MenuItem value="Montserrat">Montserrat</MenuItem>
            <MenuItem value="Morocco">Morocco</MenuItem>
            <MenuItem value="Mozambique">Mozambique</MenuItem>
            <MenuItem value="Myanmar">Myanmar</MenuItem>
            <MenuItem value="Nambia">Nambia</MenuItem>
            <MenuItem value="Nauru">Nauru</MenuItem>
            <MenuItem value="Nepal">Nepal</MenuItem>
            <MenuItem value="Netherland Antilles">Netherland Antilles</MenuItem>
            <MenuItem value="Netherlands">Netherlands (Holland, Europe)</MenuItem>
            <MenuItem value="Nevis">Nevis</MenuItem>
            <MenuItem value="New Caledonia">New Caledonia</MenuItem>
            <MenuItem value="New Zealand">New Zealand</MenuItem>
            <MenuItem value="Nicaragua">Nicaragua</MenuItem>
            <MenuItem value="Niger">Niger</MenuItem>
            <MenuItem value="Nigeria">Nigeria</MenuItem>
            <MenuItem value="Niue">Niue</MenuItem>
            <MenuItem value="Norfolk Island">Norfolk Island</MenuItem>
            <MenuItem value="Norway">Norway</MenuItem>
            <MenuItem value="Oman">Oman</MenuItem>
            <MenuItem value="Pakistan">Pakistan</MenuItem>
            <MenuItem value="Palau Island">Palau Island</MenuItem>
            <MenuItem value="Palestine">Palestine</MenuItem>
            <MenuItem value="Panama">Panama</MenuItem>
            <MenuItem value="Papua New Guinea">Papua New Guinea</MenuItem>
            <MenuItem value="Paraguay">Paraguay</MenuItem>
            <MenuItem value="Peru">Peru</MenuItem>
            <MenuItem value="Phillipines">Philippines</MenuItem>
            <MenuItem value="Pitcairn Island">Pitcairn Island</MenuItem>
            <MenuItem value="Poland">Poland</MenuItem>
            <MenuItem value="Portugal">Portugal</MenuItem>
            <MenuItem value="Puerto Rico">Puerto Rico</MenuItem>
            <MenuItem value="Qatar">Qatar</MenuItem>
            <MenuItem value="Republic of Montenegro">Republic of Montenegro</MenuItem>
            <MenuItem value="Republic of Serbia">Republic of Serbia</MenuItem>
            <MenuItem value="Reunion">Reunion</MenuItem>
            <MenuItem value="Romania">Romania</MenuItem>
            <MenuItem value="Russia">Russia</MenuItem>
            <MenuItem value="Rwanda">Rwanda</MenuItem>
            <MenuItem value="St Barthelemy">St Barthelemy</MenuItem>
            <MenuItem value="St Eustatius">St Eustatius</MenuItem>
            <MenuItem value="St Helena">St Helena</MenuItem>
            <MenuItem value="St Kitts-Nevis">St Kitts-Nevis</MenuItem>
            <MenuItem value="St Lucia">St Lucia</MenuItem>
            <MenuItem value="St Maarten">St Maarten</MenuItem>
            <MenuItem value="St Pierre &amp; Miquelon">St Pierre &amp; Miquelon</MenuItem>
            <MenuItem value="St Vincent &amp; Grenadines">St Vincent &amp; Grenadines</MenuItem>
            <MenuItem value="Saipan">Saipan</MenuItem>
            <MenuItem value="Samoa">Samoa</MenuItem>
            <MenuItem value="Samoa American">Samoa American</MenuItem>
            <MenuItem value="San Marino">San Marino</MenuItem>
            <MenuItem value="Sao Tome &amp; Principe">Sao Tome &amp; Principe</MenuItem>
            <MenuItem value="Saudi Arabia">Saudi Arabia</MenuItem>
            <MenuItem value="Senegal">Senegal</MenuItem>
            <MenuItem value="Serbia">Serbia</MenuItem>
            <MenuItem value="Seychelles">Seychelles</MenuItem>
            <MenuItem value="Sierra Leone">Sierra Leone</MenuItem>
            <MenuItem value="Singapore">Singapore</MenuItem>
            <MenuItem value="Slovakia">Slovakia</MenuItem>
            <MenuItem value="Slovenia">Slovenia</MenuItem>
            <MenuItem value="Solomon Islands">Solomon Islands</MenuItem>
            <MenuItem value="Somalia">Somalia</MenuItem>
            <MenuItem value="South Africa">South Africa</MenuItem>
            <MenuItem value="Spain">Spain</MenuItem>
            <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
            <MenuItem value="Sudan">Sudan</MenuItem>
            <MenuItem value="Suriname">Suriname</MenuItem>
            <MenuItem value="Swaziland">Swaziland</MenuItem>
            <MenuItem value="Sweden">Sweden</MenuItem>
            <MenuItem value="Switzerland">Switzerland</MenuItem>
            <MenuItem value="Syria">Syria</MenuItem>
            <MenuItem value="Tahiti">Tahiti</MenuItem>
            <MenuItem value="Taiwan">Taiwan</MenuItem>
            <MenuItem value="Tajikistan">Tajikistan</MenuItem>
            <MenuItem value="Tanzania">Tanzania</MenuItem>
            <MenuItem value="Thailand">Thailand</MenuItem>
            <MenuItem value="Togo">Togo</MenuItem>
            <MenuItem value="Tokelau">Tokelau</MenuItem>
            <MenuItem value="Tonga">Tonga</MenuItem>
            <MenuItem value="Trinidad &amp; Tobago">Trinidad &amp; Tobago</MenuItem>
            <MenuItem value="Tunisia">Tunisia</MenuItem>
            <MenuItem value="Turkey">Turkey</MenuItem>
            <MenuItem value="Turkmenistan">Turkmenistan</MenuItem>
            <MenuItem value="Turks &amp; Caicos Is">Turks &amp; Caicos Is</MenuItem>
            <MenuItem value="Tuvalu">Tuvalu</MenuItem>
            <MenuItem value="Uganda">Uganda</MenuItem>
            <MenuItem value="Ukraine">Ukraine</MenuItem>
            <MenuItem value="United Arab Erimates">United Arab Emirates</MenuItem>
            <MenuItem value="United Kingdom">United Kingdom</MenuItem>
            <MenuItem value="United States of America">United States of America</MenuItem>
            <MenuItem value="Uraguay">Uruguay</MenuItem>
            <MenuItem value="Uzbekistan">Uzbekistan</MenuItem>
            <MenuItem value="Vanuatu">Vanuatu</MenuItem>
            <MenuItem value="Vatican City State">Vatican City State</MenuItem>
            <MenuItem value="Venezuela">Venezuela</MenuItem>
            <MenuItem value="Vietnam">Vietnam</MenuItem>
            <MenuItem value="Virgin Islands (Brit)">Virgin Islands (Brit)</MenuItem>
            <MenuItem value="Virgin Islands (USA)">Virgin Islands (USA)</MenuItem>
            <MenuItem value="Wake Island">Wake Island</MenuItem>
            <MenuItem value="Wallis &amp; Futana Is">Wallis &amp; Futana Is</MenuItem>
            <MenuItem value="Yemen">Yemen</MenuItem>
            <MenuItem value="Zaire">Zaire</MenuItem>
            <MenuItem value="Zambia">Zambia</MenuItem>
            <MenuItem value="Zimbabwe">Zimbabwe</MenuItem>

          </Select>
        </FormControl>

      </form>
    </div>
  );
}

GamingPrefsForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  timeZone: PropTypes.number,
  country: PropTypes.string,
};

// GamingPrefsForm.defaultProps = {
//   timeZone: -1,
// };

export default withStyles(styles)(GamingPrefsForm);
