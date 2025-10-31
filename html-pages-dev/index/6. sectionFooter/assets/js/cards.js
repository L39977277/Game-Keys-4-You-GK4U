    // ARRAY.JS - Array of Data

    function FpsFill() {
        const gameSection = document.getElementById("gameSection");
        gameSection.innerHTML = ""; // Clear previous content

        for (const fps of fpsData) {
            const categoryCardItem = document.createElement("div");
            categoryCardItem.className = "categoryCardItem";

            categoryCardItem.innerHTML = `
                <div class="categoryCardImageWrapper">
                    <img src="${fps.img}" alt="${fps.name}" />
                </div>
                <div class="categoryCardBody">
                    <div class="categoryCardHeader">
                        <h2 class="categoryCardTitle">${fps.name}</h2>
                        <span class="categoryCardPrice">£${fps.price}</span>
                    </div>
                    <p class="categoryCardText">${fps.description}</p>
                    <span style="font-size:0.8em; color:#888;">
                        Source: <a href="${fps.source}" target="_blank">Steam</a>
                    </span>
                    <div class="categoryCardButtons">
                        <button class="categoryCardButton" onclick="addItemBasket('${fps.name}', '${fps.price}')">ADD TO CART</button>
                    </div>
                </div>
            `;
            gameSection.appendChild(categoryCardItem);
        }
    }

    function StrategyFill() {
        const gameSection = document.getElementById("gameSection");
        gameSection.innerHTML = "";

        for (const strategy of strategyData) {
            const categoryCardItem = document.createElement("div");
            categoryCardItem.className = "categoryCardItem";

            categoryCardItem.innerHTML = `
                <div class="categoryCardImageWrapper">
                    <img src="${strategy.img}" alt="${strategy.name}" />
                </div>
                <div class="categoryCardBody">
                    <div class="categoryCardHeader">
                        <h2 class="categoryCardTitle">${strategy.name}</h2>
                        <span class="categoryCardPrice">£${strategy.price}</span>
                    </div>
                    <p class="categoryCardText">${strategy.description}</p>
                    <span style="font-size:0.8em; color:#888;">
                        Source: <a href="${strategy.source}" target="_blank">Steam</a>
                    </span>
                    <div class="categoryCardButtons">
                        <button class="categoryCardButton" onclick="addItemBasket('${strategy.name}', '${strategy.price}')">ADD TO CART</button>
                    </div>
                </div>
            `;
            gameSection.appendChild(categoryCardItem);
        }
    }

    function SimulationFill() {
        const gameSection = document.getElementById("gameSection");
        gameSection.innerHTML = "";

        for (const simulation of SimulationData) {
            const categoryCardItem = document.createElement("div");
            categoryCardItem.className = "categoryCardItem";

            categoryCardItem.innerHTML = `
                <div class="categoryCardImageWrapper">
                    <img src="${simulation.img}" alt="${simulation.name}" />
                </div>
                <div class="categoryCardBody">
                    <div class="categoryCardHeader">
                        <h2 class="categoryCardTitle">${simulation.name}</h2>
                        <span class="categoryCardPrice">£${simulation.price}</span>
                    </div>
                    <p class="categoryCardText">${simulation.description}</p>
                    <span style="font-size:0.8em; color:#888;">
                        Source: <a href="${simulation.source}" target="_blank">Steam</a>
                    </span>
                    <div class="categoryCardButtons">
                        <button class="categoryCardButton" onclick="addItemBasket('${simulation.name}', '${simulation.price}')">ADD TO CART</button>
                    </div>
                </div>
            `;
            gameSection.appendChild(categoryCardItem);
        }
    }

    function SportsFill() {
        const gameSection = document.getElementById("gameSection");
        gameSection.innerHTML = "";

        for (const sports of sportsData) {
            const categoryCardItem = document.createElement("div");
            categoryCardItem.className = "categoryCardItem";

            categoryCardItem.innerHTML = `
                <div class="categoryCardImageWrapper">
                    <img src="${sports.img}" alt="${sports.name}" />
                </div>
                <div class="categoryCardBody">
                    <div class="categoryCardHeader">
                        <h2 class="categoryCardTitle">${sports.name}</h2>
                        <span class="categoryCardPrice">£${sports.price}</span>
                    </div>
                    <p class="categoryCardText">${sports.description}</p>
                    <span style="font-size:0.8em; color:#888;">
                        Source: <a href="${sports.source}" target="_blank">Steam</a>
                    </span>
                    <div class="categoryCardButtons">
                        <button class="categoryCardButton" onclick="addItemBasket('${sports.name}', '${sports.price}')">ADD TO CART</button>
                    </div>
                </div>
            `;
            gameSection.appendChild(categoryCardItem);
        }
    }

    function RacingFill() {
        const gameSection = document.getElementById("gameSection");
        gameSection.innerHTML = "";

        for (const racing of racingData) {
            const categoryCardItem = document.createElement("div");
            categoryCardItem.className = "categoryCardItem";

            categoryCardItem.innerHTML = `
                <div class="categoryCardImageWrapper">
                    <img src="${racing.img}" alt="${racing.name}" />
                </div>
                <div class="categoryCardBody">
                    <div class="categoryCardHeader">
                        <h2 class="categoryCardTitle">${racing.name}</h2>
                        <span class="categoryCardPrice">£${racing.price}</span>
                    </div>
                    <p class="categoryCardText">${racing.description}</p>
                    <span style="font-size:0.8em; color:#888;">
                        Source: <a href="${racing.source}" target="_blank">Steam</a>
                    </span>
                    <div class="categoryCardButtons">
                        <button class="categoryCardButton" onclick="addItemBasket('${racing.name}', '${racing.price}')">ADD TO CART</button>
                    </div>
                </div>
            `;
            gameSection.appendChild(categoryCardItem);
        }
    }

    function HorrorFill() {
        const gameSection = document.getElementById("gameSection");
        gameSection.innerHTML = "";

        for (const horror of horrorData) {
            const categoryCardItem = document.createElement("div");
            categoryCardItem.className = "categoryCardItem";

            categoryCardItem.innerHTML = `
                <div class="categoryCardImageWrapper">
                    <img src="${horror.img}" alt="${horror.name}" />
                </div>
                <div class="categoryCardBody">
                    <div class="categoryCardHeader">
                        <h2 class="categoryCardTitle">${horror.name}</h2>
                        <span class="categoryCardPrice">£${horror.price}</span>
                    </div>
                    <p class="categoryCardText">${horror.description}</p>
                    <span style="font-size:0.8em; color:#888;">
                        Source: <a href="${horror.source}" target="_blank">Steam</a>
                    </span>
                    <div class="categoryCardButtons">
                        <button class="categoryCardButton" onclick="addItemBasket('${horror.name}', '${horror.price}')">ADD TO CART</button>
                    </div>
                </div>
            `;
            gameSection.appendChild(categoryCardItem);
        }
    }

document.addEventListener("DOMContentLoaded", () => {
  FpsFill();
});