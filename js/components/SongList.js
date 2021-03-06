import React from 'react';
import {DropDownButton} from 'react-bootstrap';
import SongItem from './SongItem';
import SongFormatterMixin from '../mixins/SongFormatterMixin';

module.exports = React.createClass({

	mixins: [ SongFormatterMixin ],

	render: function() {

		var songs = [];
		var currentSongIndex = this.props.currentSongIndex;
		var isPlaying = this.props.isPlaying;
		var isPause = this.props.isPause;
		var songCount = this.props.songs.length;

		songs = this.props.songs.map(function(song, index){

			var songName = this.getSongName(song);
			var songName = songCount > 1 ? (index + 1) + ". " + songName : songName;

			return <SongItem currentSongIndex={currentSongIndex} 
														eventKey={index} 
														name={songName}
														isPlaying={isPlaying} 
														isPause={isPause} 
														onSongItemClick={this.props.onSongItemClick.bind(null, index)} /> ;
		}, this);

		return (
			<div className="audio-songs-list">
				<DropDownButton ref="dropdownButton">
					{songs}
				</DropDownButton>
			</div>
		);
	},

	hideDropdownMenu: function() {
		this.refs.dropdownButton.setDropdownState(false);
	}

})