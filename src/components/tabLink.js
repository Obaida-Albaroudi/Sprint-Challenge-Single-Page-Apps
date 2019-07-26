import React from 'react';
import { Link } from 'react-router-dom'
import {Icon } from 'semantic-ui-react'

const tabLinks =() =>{
    const createLabel = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>

    const welcomeLabel = createLabel("home", "Home Page")
    const characterLabel = createLabel("users", "Characters")
    const locationLabel = createLabel("map outline", "Location")
    const episodeLabel = createLabel("video", "Episode")
        return(
		<div>
			<div>
            <Icon name={"home"} />
			<Link to='/'>Home Page</Link>
			</div>
			<div>
            <Icon name={"users"} />
			<Link to='/characters'>Characters</Link>
			</div>
			<div>
            <Icon name={"map outline"} />
			<Link to='/locations'>Location" </Link>
			</div>
			<div>
            <Icon name={"video"} />
			<Link to='/episodes'>Episode</Link>
			</div>
		</div>
	)
}

export default tabLinks;