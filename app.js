document.addEventListener('DOMContentLoaded', function() {
    
    let plantData = [
        { name: 'Jelly Bean Tomatoes', viability: 'Gamble', method: 'Start Indoors (Immediately) / Purchase Transplants', window: 'Jul-Aug', spacing: 1, maturity: '70 (from transplant)', notes: 'Very late start from seed. Transplants strongly recommended. Needs trellis. Frost susceptible.', type: 'Tomato', emoji: '🍅', plantingMonth: 7, seedsToStart: '3-5', successionWaves: 1, growthStages: [{stage: 'Germination', days: '7-14 days', notes: 'Keep warm (75-85°F).'}, {stage: 'True Leaves', days: '2-3 weeks', notes: 'Thin to strongest seedling. Begin hardening off.'}, {stage: 'Transplant Outdoors', days: '6-8 weeks', notes: 'Acclimate gradually to outdoor conditions.'}, {stage: 'First Harvest', days: '70-80 days after transplant', notes: 'Harvest ripe fruits regularly.'}], feedingSchedule: [{type: 'Balanced liquid fertilizer (e.g., 5-5-5)', frequency: 'Weekly', stage: 'After true leaves until transplant'}, {type: 'Tomato-specific fertilizer (e.g., 5-10-10)', frequency: 'Every 2-3 weeks', stage: 'After transplanting and fruit set'}] },
        { name: 'Big Boy Hybrid Tomatoes', viability: 'Gamble', method: 'Start Indoors (Immediately) / Purchase Transplants', window: 'Jul-Aug', spacing: 1, maturity: '78 (from transplant)', notes: 'Very late start from seed. Transplants strongly recommended. Vigorous vining, needs tall trellis. Frost susceptible.', type: 'Tomato', emoji: '🍅', plantingMonth: 7, seedsToStart: '3-5', successionWaves: 1, growthStages: [{stage: 'Germination', days: '7-14 days', notes: 'Keep warm (75-85°F).'}, {stage: 'True Leaves', days: '2-3 weeks', notes: 'Thin to strongest seedling. Begin hardening off.'}, {stage: 'Transplant Outdoors', days: '6-8 weeks', notes: 'Acclimate gradually to outdoor conditions.'}, {stage: 'First Harvest', days: '78-90 days after transplant', notes: 'Harvest ripe fruits regularly.'}], feedingSchedule: [{type: 'Balanced liquid fertilizer (e.g., 5-5-5)', frequency: 'Weekly', stage: 'After true leaves until transplant'}, {type: 'Tomato-specific fertilizer (e.g., 5-10-10)', frequency: 'Every 2-3 weeks', stage: 'After transplanting and fruit set'}] },
        { name: 'Peppermint San Marzano Tomatoes', viability: 'Gamble', method: 'Start Indoors (Immediately) / Purchase Transplants', window: 'Jul-Aug', spacing: 1, maturity: '80 (from transplant)', notes: 'Very late start from seed. Transplants strongly recommended. Needs trellis. Frost susceptible.', type: 'Tomato', emoji: '🍅', plantingMonth: 7, seedsToStart: '3-5', successionWaves: 1, growthStages: [{stage: 'Germination', days: '7-14 days', notes: 'Keep warm (75-85°F).'}, {stage: 'True Leaves', days: '2-3 weeks', notes: 'Thin to strongest seedling. Begin hardening off.'}, {stage: 'Transplant Outdoors', days: '6-8 weeks', notes: 'Acclimate gradually to outdoor conditions.'}, {stage: 'First Harvest', days: '80-95 days after transplant', notes: 'Harvest ripe fruits regularly.'}], feedingSchedule: [{type: 'Balanced liquid fertilizer (e.g., 5-5-5)', frequency: 'Weekly', stage: 'After true leaves until transplant'}, {type: 'Tomato-specific fertilizer (e.g., 5-10-10)', frequency: 'Every 2-3 weeks', stage: 'After transplanting and fruit set'}] },
        { name: 'Large Cherry Tomatoes', viability: 'Gamble', method: 'Start Indoors (Immediately) / Purchase Transplants', window: 'Jul-Aug', spacing: 1, maturity: '50-60 (from transplant)', notes: 'Fastest maturing tomato, best chance from seed if started immediately indoors. Transplants still better. Needs trellis. Frost susceptible.', type: 'Tomato', emoji: '🍅', plantingMonth: 7, seedsToStart: '3-5', successionWaves: 1, growthStages: [{stage: 'Germination', days: '7-14 days', notes: 'Keep warm (75-85°F).'}, {stage: 'True Leaves', days: '2-3 weeks', notes: 'Thin to strongest seedling. Begin hardening off.'}, {stage: 'Transplant Outdoors', days: '6-8 weeks', notes: 'Acclimate gradually to outdoor conditions.'}, {stage: 'First Harvest', days: '50-60 days after transplant', notes: 'Harvest ripe fruits regularly.'}], feedingSchedule: [{type: 'Balanced liquid fertilizer (e.g., 5-5-5)', frequency: 'Weekly', stage: 'After true leaves until transplant'}, {type: 'Tomato-specific fertilizer (e.g., 5-10-10)', frequency: 'Every 2-3 weeks', stage: 'After transplanting and fruit set'}] },
        { name: 'Greek Oregano', viability: 'Good', method: 'Direct Sow / Transplant', window: 'Jul-Aug', spacing: 1, maturity: 'N/A (Perennial)', notes: 'Benefits from afternoon shade in hot climates. Establish for future years.', type: 'Herb', emoji: '🌿', plantingMonth: 7, seedsToStart: '3-5', successionWaves: 1, growthStages: [{stage: 'Germination', days: '7-14 days', notes: 'Lightly cover seeds. Keep moist.'}, {stage: 'Establishment', days: 'Ongoing', notes: 'Pinch back to encourage bushy growth.'}], feedingSchedule: [{type: 'Compost tea / Balanced liquid fertilizer', frequency: 'Monthly', stage: 'After establishment'}] },
        { name: 'Cosmos', viability: 'Plant Later', method: 'Direct Sow / Transplant', window: 'Sep-Oct', spacing: '12-18" apart', maturity: 'N/A (Flower)', notes: 'Plant later in the fall. Attracts pollinators.', type: 'Flower', emoji: '🌸', plantingMonth: 9, seedsToStart: '10-15', successionWaves: 1, growthStages: [{stage: 'Germination', days: '7-10 days', notes: 'Lightly cover seeds.'}, {stage: 'First Blooms', days: '50-60 days', notes: 'Deadhead regularly for more blooms.'}], feedingSchedule: [{type: 'Low-nitrogen fertilizer', frequency: 'Monthly', stage: 'After establishment'}] },
        { name: 'Strawflower', viability: 'Plant Later', method: 'Direct Sow / Transplant', window: 'Mid-Oct', spacing: '6-12" apart', maturity: 'N/A (Flower)', notes: 'Tolerates temperatures down to 10°F. Plant later in the fall.', type: 'Flower', emoji: '🌼', plantingMonth: 10, seedsToStart: '10-15', successionWaves: 1, growthStages: [{stage: 'Germination', days: '7-14 days', notes: 'Lightly cover seeds.'}, {stage: 'First Blooms', days: '60-70 days', notes: 'Harvest for drying when flowers are half open.'}], feedingSchedule: [{type: 'Balanced liquid fertilizer', frequency: 'Monthly', stage: 'After establishment'}] },
        { name: 'Black Elderberry', viability: 'Good', method: 'Direct Sow / Transplant', window: 'Jul-Aug', spacing: '4ft apart', maturity: 'N/A (Perennial)', notes: 'Large shrub, best for long-term establishment. Full sun for optimum production.', type: 'Other', emoji: '🌳', plantingMonth: 7, seedsToStart: '2-3', successionWaves: 1, growthStages: [{stage: 'Germination', days: '2-4 weeks', notes: 'Requires patience. Keep moist.'}, {stage: 'Establishment', days: 'Ongoing', notes: 'Focus on root development. May not fruit in first year.'}], feedingSchedule: [{type: 'Compost / Balanced granular fertilizer', frequency: 'Annually (Spring)', stage: 'After establishment'}] },
        { name: 'Blue Milkweed', viability: 'Winter Project', method: 'Direct Sow', window: 'Dec (After frost)', spacing: 'N/A', maturity: 'N/A (Perennial)', notes: 'Requires cold stratification; plant after first frost for spring germination.', type: 'Other', emoji: '🦋', plantingMonth: 12, seedsToStart: '10-15', successionWaves: 1, growthStages: [{stage: 'Germination', days: 'Spring (after cold stratification)', notes: 'Seeds need winter chill to sprout.'}, {stage: 'First Blooms', days: 'Summer (Year 2)', notes: 'Attracts Monarch butterflies.'}], feedingSchedule: [{type: 'None/Minimal', frequency: 'N/A', stage: 'Prefers lean soil'}] },
        { name: 'Butternut Squash', viability: 'Gamble', method: 'Direct Sow', window: 'Jul-Aug', spacing: 1, maturity: '85-110', notes: 'Very late start for full maturity before frost. Needs strong trellis. Frost susceptible.', type: 'Squash', emoji: '🎃', plantingMonth: 7, seedsToStart: '3-5', successionWaves: 1, growthStages: [{stage: 'Germination', days: '7-10 days', notes: 'Plant 1 inch deep. Keep moist.'}, {stage: 'Vining', days: '3-4 weeks', notes: 'Train onto trellis immediately.'}, {stage: 'First Fruit Set', days: '60-70 days', notes: 'Hand-pollinate if needed. Ensure consistent water.'}, {stage: 'Harvest', days: '85-110 days', notes: 'Harvest when skin is hard and color is deep tan.'}], feedingSchedule: [{type: 'Balanced liquid fertilizer', frequency: 'Every 2-3 weeks', stage: 'After true leaves emerge'}, {type: 'Higher potassium fertilizer (e.g., 5-10-10)', frequency: 'Every 2 weeks', stage: 'Once flowering begins'}] },
        { name: 'Pickling Cucumber', viability: 'Good', method: 'Direct Sow', window: 'Jul-Aug', spacing: 2, maturity: '45-53', notes: 'Excellent for immediate planting. Needs trellis. Frost susceptible.', type: 'Cucumber', emoji: '🥒', plantingMonth: 7, seedsToStart: '5-7', successionWaves: 2, successionInterval: '3 weeks', growthStages: [{stage: 'Germination', days: '3-10 days', notes: 'Plant 1 inch deep. Keep moist.'}, {stage: 'Vining', days: '2-3 weeks', notes: 'Train onto trellis immediately.'}, {stage: 'First Fruit Set', days: '35-40 days', notes: 'Ensure consistent water to prevent bitterness.'}, {stage: 'Harvest', days: '45-53 days', notes: 'Harvest frequently when small for pickling.'}], feedingSchedule: [{type: 'Balanced liquid fertilizer', frequency: 'Every 2 weeks', stage: 'After true leaves emerge'}, {type: 'Higher potassium fertilizer', frequency: 'Every 1-2 weeks', stage: 'Once flowering begins'}] },
        { name: 'Marigolds', viability: 'Good', method: 'Direct Sow', window: 'Jul-Aug', spacing: 4, maturity: 'N/A (Flower)', notes: 'Excellent companion plant, repels pests.', type: 'Flower', emoji: '�', plantingMonth: 7, seedsToStart: '15-20', successionWaves: 1, growthStages: [{stage: 'Germination', days: '5-10 days', notes: 'Lightly cover seeds.'}, {stage: 'First Blooms', days: '40-50 days', notes: 'Deadhead to encourage more flowers.'}], feedingSchedule: [{type: 'None/Minimal', frequency: 'N/A', stage: 'Generally not required'}] },
        { name: 'Ranunculus', viability: 'Winter Project', method: 'Plant Corms', window: 'Mid-Nov', spacing: '8-9" apart', maturity: 'N/A (Flower)', notes: 'Requires pre-sprouting corms. Plant later in the fall. Protect from freezes.', type: 'Flower', emoji: '🌷', plantingMonth: 11, seedsToStart: 'N/A (Corms)', successionWaves: 1, growthStages: [{stage: 'Pre-sprouting', days: '10-14 days', notes: 'Soak corms, then chill in moist medium.'}, {stage: 'Planting', days: 'Mid-Nov', notes: 'Plant claws down, 2-3 inches deep.'}, {stage: 'First Blooms', days: 'Late Winter/Early Spring', notes: 'Protect from hard freezes.'}], feedingSchedule: [{type: 'Balanced liquid fertilizer', frequency: 'Monthly', stage: 'After sprouting and during bloom'}] },
        { name: 'Little Gem Lettuce', viability: 'Plant Later', method: 'Direct Sow', window: 'Late Aug-Sep', spacing: 4, maturity: 'N/A (Cool season)', notes: 'Best for fall. Can succession plant. Frost tolerant.', type: 'Greens', emoji: '🥬', plantingMonth: 8, seedsToStart: '15-20', successionWaves: 3, successionInterval: '2 weeks', growthStages: [{stage: 'Germination', days: '7-10 days', notes: 'Lightly cover seeds. Keep moist.'}, {stage: 'Baby Leaf Harvest', days: '25-30 days', notes: 'Cut outer leaves for continuous harvest.'}, {stage: 'Full Head Harvest', days: '45-55 days', notes: 'Harvest entire head before bolting.'}], feedingSchedule: [{type: 'Nitrogen-rich liquid fertilizer (e.g., fish emulsion)', frequency: 'Every 2 weeks', stage: 'After true leaves emerge'}] },
        { name: 'Armenian Cucumber', viability: 'Good', method: 'Direct Sow', window: 'Jul-Aug', spacing: 2, maturity: '60-75', notes: 'Excellent for immediate planting. Needs trellis. Frost susceptible.', type: 'Cucumber', emoji: '🥒', plantingMonth: 7, seedsToStart: '5-7', successionWaves: 2, successionInterval: '3 weeks', growthStages: [{stage: 'Germination', days: '3-10 days', notes: 'Plant 1 inch deep. Keep moist.'}, {stage: 'Vining', days: '2-3 weeks', notes: 'Train onto trellis immediately.'}, {stage: 'First Fruit Set', days: '50-60 days', notes: 'Ensure consistent water to prevent bitterness.'}, {stage: 'Harvest', days: '60-75 days', notes: 'Harvest frequently when young and tender.'}], feedingSchedule: [{type: 'Balanced liquid fertilizer', frequency: 'Every 2 weeks', stage: 'After true leaves emerge'}, {type: 'Higher potassium fertilizer', frequency: 'Every 1-2 weeks', stage: 'Once flowering begins'}] },
        { name: 'Cocozelle Zucchini', viability: 'Good', method: 'Direct Sow', window: 'Jul-Aug', spacing: 1, maturity: '55', notes: 'Excellent for immediate planting. Needs trellis. Frost susceptible.', type: 'Squash', emoji: '🥒', plantingMonth: 7, seedsToStart: '5-7', successionWaves: 2, successionInterval: '3 weeks', growthStages: [{stage: 'Germination', days: '7-10 days', notes: 'Plant 1 inch deep. Keep moist.'}, {stage: 'First Fruit Set', days: '40-45 days', notes: 'Ensure good pollination. Harvest frequently.'}, {stage: 'Harvest', days: '55-60 days', notes: 'Harvest when 6-8 inches long for best flavor.'}], feedingSchedule: [{type: 'Balanced liquid fertilizer', frequency: 'Every 2 weeks', stage: 'After true leaves emerge'}, {type: 'Higher potassium fertilizer', frequency: 'Every 1-2 weeks', stage: 'Once flowering begins'}] },
        { name: 'Long Purple Eggplant', viability: 'Gamble', method: 'Start Indoors (Immediately) / Purchase Transplants', window: 'Jul-Aug', spacing: 1, maturity: '80', notes: 'Very late start from seed. Transplants strongly recommended. Frost susceptible.', type: 'Other', emoji: '🍆', plantingMonth: 7, seedsToStart: '3-5', successionWaves: 1, growthStages: [{stage: 'Germination', days: '7-14 days', notes: 'Keep warm (75-85°F).'}, {stage: 'True Leaves', days: '2-3 weeks', notes: 'Thin to strongest seedling. Begin hardening off.'}, {stage: 'Transplant Outdoors', days: '6-8 weeks', notes: 'Acclimate gradually to outdoor conditions.'}, {stage: 'First Fruit Set', days: '60-70 days after transplant', notes: 'Ensure consistent water.'}, {stage: 'Harvest', days: '80-90 days after transplant', notes: 'Harvest when skin is shiny and firm.'}], feedingSchedule: [{type: 'Balanced liquid fertilizer', frequency: 'Weekly', stage: 'After true leaves until transplant'}, {type: 'Balanced granular fertilizer', frequency: 'Every 3-4 weeks', stage: 'After transplanting and fruit set'}] },
        { name: 'Baby Leaf Spinach', viability: 'Plant Later', method: 'Direct Sow', window: 'Late Aug-Sep', spacing: 9, maturity: 'N/A (Cool season)', notes: 'Excellent for fall. Frost tolerant. Needs dark to germinate.', type: 'Greens', emoji: '🍃', plantingMonth: 8, seedsToStart: '20-25', successionWaves: 3, successionInterval: '2 weeks', growthStages: [{stage: 'Germination', days: '5-9 days', notes: 'Keep soil consistently moist and dark.'}, {stage: 'First True Leaves', days: '10-14 days', notes: 'Thin to final spacing. Ensure good airflow.'}, {stage: 'Baby Leaf Harvest', days: '25-30 days', notes: 'Begin cutting outer leaves for continuous harvest.'}, {stage: 'Full Size Harvest', days: '40-50 days', notes: 'Harvest entire plant or continue cut-and-come-again.'}], feedingSchedule: [{type: 'Nitrogen-rich liquid fertilizer (e.g., fish emulsion)', frequency: 'Every 2 weeks', stage: 'After true leaves emerge'}] },
        { name: 'Bloomsdale Spinach', viability: 'Plant Later', method: 'Direct Sow', window: 'Late Aug-Sep', spacing: 9, maturity: 'N/A (Cool season)', notes: 'Excellent for fall. Frost tolerant. Needs dark to germinate.', type: 'Greens', emoji: '🍃', plantingMonth: 8, seedsToStart: '10-15', successionWaves: 3, successionInterval: '2 weeks', growthStages: [{stage: 'Germination', days: '5-9 days', notes: 'Keep soil consistently moist and dark.'}, {stage: 'First True Leaves', days: '10-14 days', notes: 'Thin to final spacing. Ensure good airflow.'}, {stage: 'Baby Leaf Harvest', days: '30-35 days', notes: 'Begin cutting outer leaves for continuous harvest.'}, {stage: 'Full Size Harvest', days: '45-55 days', notes: 'Harvest entire plant or continue cut-and-come-again.'}], feedingSchedule: [{type: 'Nitrogen-rich liquid fertilizer (e.g., fish emulsion)', frequency: 'Every 2 weeks', stage: 'After true leaves emerge'}] },
        { name: 'Roma II Beans', viability: 'Good', method: 'Direct Sow', window: 'Jul-Aug', spacing: 9, maturity: '55-60', notes: 'Excellent for immediate planting. Bush type. Frost susceptible.', type: 'Bean', emoji: '🫘', plantingMonth: 7, seedsToStart: '20-25', successionWaves: 2, successionInterval: '2 weeks', growthStages: [{stage: 'Germination', days: '7-10 days', notes: 'Plant 1-1.5 inches deep. Keep moist.'}, {stage: 'First Flowers', days: '30-35 days', notes: 'Ensure consistent moisture.'}, {stage: 'First Harvest', days: '55-60 days', notes: 'Harvest regularly to encourage more production.'}], feedingSchedule: [{type: 'Balanced liquid fertilizer (low nitrogen)', frequency: 'Every 3-4 weeks', stage: 'After flowering begins'}] },
        { name: 'Blue Lake 156 Beans', viability: 'Good', method: 'Direct Sow', window: 'Jul-Aug', spacing: 9, maturity: '55', notes: 'Excellent for immediate planting. Bush type. Frost susceptible.', type: 'Bean', emoji: '🫘', plantingMonth: 7, seedsToStart: '20-25', successionWaves: 2, successionInterval: '2 weeks', growthStages: [{stage: 'Germination', days: '7-10 days', notes: 'Plant 1-1.5 inches deep. Keep moist.'}, {stage: 'First Flowers', days: '30-35 days', notes: 'Ensure consistent moisture.'}, {stage: 'First Harvest', days: '55-60 days', notes: 'Harvest regularly to encourage more production.'}], feedingSchedule: [{type: 'Balanced liquid fertilizer (low nitrogen)', frequency: 'Every 3-4 weeks', stage: 'After flowering begins'}] },
        { name: 'Sugar Snap Peas', viability: 'Plant Later', method: 'Direct Sow', window: 'Mid-Sep-Oct', spacing: 9, maturity: '60-80', notes: 'Plant later in the fall. Needs trellis. Frost tolerant.', type: 'Pea', emoji: '🫛', plantingMonth: 9, seedsToStart: '40-50', successionWaves: 2, successionInterval: '3 weeks', growthStages: [{stage: 'Germination', days: '7-14 days', notes: 'Plant 0.5-1 inch deep. Keep moist.'}, {stage: 'Vining', days: '3-4 weeks', notes: 'Provide trellis support immediately.'}, {stage: 'First Harvest', days: '60-80 days', notes: 'Harvest pods when plump and sweet.'}], feedingSchedule: [{type: 'Balanced liquid fertilizer (low nitrogen)', frequency: 'Every 3-4 weeks', stage: 'After flowering begins'}] },
        { name: 'French Dressing Radishes', viability: 'Plant Later', method: 'Direct Sow', window: 'Late Oct-Early Nov', spacing: 16, maturity: '25-35', notes: 'Very fast. Ideal for succession planting later in fall. Cool season.', type: 'Root', emoji: '🌶️', plantingMonth: 10, seedsToStart: '20-25', successionWaves: 4, successionInterval: '1-2 weeks', growthStages: [{stage: 'Germination', days: '3-7 days', notes: 'Keep moist. Lightly cover seeds.'}, {stage: 'Root Swelling', days: '15-20 days', notes: 'Ensure consistent moisture to prevent pithiness.'}, {stage: 'Harvest', days: '25-35 days', notes: 'Harvest promptly when roots are small and tender.'}], feedingSchedule: [{type: 'None/Minimal', frequency: 'N/A', stage: 'Generally not required, fast growing'}] },
        { name: 'Cherry Belle Radishes', viability: 'Plant Later', method: 'Direct Sow', window: 'Late Oct-Early Nov', spacing: 16, maturity: '22-25', notes: 'Very fast. Ideal for succession planting later in fall. Cool season.', type: 'Root', emoji: '🌶️', plantingMonth: 10, seedsToStart: '20-25', successionWaves: 4, successionInterval: '1-2 weeks', growthStages: [{stage: 'Germination', days: '3-7 days', notes: 'Keep moist. Lightly cover seeds.'}, {stage: 'Root Swelling', days: '12-18 days', notes: 'Ensure consistent moisture to prevent pithiness.'}, {stage: 'Harvest', days: '22-25 days', notes: 'Harvest promptly when roots are small and tender.'}], feedingSchedule: [{type: 'None/Minimal', frequency: 'N/A', stage: 'Generally not required, fast growing'}] },
        { name: 'Carnival Blend Carrots', viability: 'Plant Later', method: 'Direct Sow', window: 'Mid-Sep', spacing: 16, maturity: '65-75', notes: 'Direct sow only. Plant later in the fall. Cool season.', type: 'Root', emoji: '🥕', plantingMonth: 9, seedsToStart: '40-50', successionWaves: 2, successionInterval: '3 weeks', growthStages: [{stage: 'Germination', days: '7-21 days', notes: 'Can be slow. Keep consistently moist. Lightly cover.'}, {stage: 'Thinning', days: '3-4 weeks', notes: 'Thin to 2-3 inches apart for good root development.'}, {stage: 'Root Development', days: 'Ongoing', notes: 'Keep soil loose and moist.'}, {stage: 'Harvest', days: '65-75 days', notes: 'Harvest when roots are desired size.'}], feedingSchedule: [{type: 'Balanced liquid fertilizer (low nitrogen)', frequency: 'Every 3-4 weeks', stage: 'After thinning'}] },
        { name: 'Broad Leaf Sage', viability: 'Plant Later', method: 'Direct Sow (Difficult) / Purchase Transplants', window: 'Early Oct', spacing: 1, maturity: 'N/A (Perennial)', notes: 'Best from transplants. Establish for future years.', type: 'Herb', emoji: '🌿', plantingMonth: 10, seedsToStart: '3-5', successionWaves: 1, growthStages: [{stage: 'Germination', days: '7-21 days', notes: 'Can be slow from seed. Keep moist.'}, {stage: 'Establishment', days: 'Ongoing', notes: 'Pinch back to encourage bushy growth.'}], feedingSchedule: [{type: 'Compost tea / Balanced granular fertilizer', frequency: 'Monthly', stage: 'After establishment'}] },
        { name: 'Genovese Basil', viability: 'Good', method: 'Direct Sow', window: 'Jul-Aug', spacing: 4, maturity: 'N/A (Annual herb)', notes: 'Zero frost tolerance. Good for immediate planting.', type: 'Herb', emoji: '🌿', plantingMonth: 7, seedsToStart: '20-25', successionWaves: 2, successionInterval: '3 weeks', growthStages: [{stage: 'Germination', days: '5-10 days', notes: 'Lightly cover seeds. Keep moist.'}, {stage: 'First Harvest', days: '30-40 days', notes: 'Pinch off flower buds. Harvest regularly.'}], feedingSchedule: [{type: 'Balanced liquid fertilizer', frequency: 'Every 2-3 weeks', stage: 'After true leaves emerge'}] },
        { name: 'Cilantro', viability: 'Plant Later', method: 'Direct Sow', window: 'Sep', spacing: 9, maturity: '45-70', notes: 'Cool season. Plant later in the fall. Tolerates down to 10°F.', type: 'Herb', emoji: '🌿', plantingMonth: 9, seedsToStart: '20-25', successionWaves: 3, successionInterval: '2 weeks', growthStages: [{stage: 'Germination', days: '7-14 days', notes: 'Keep moist. Can be slow.'}, {stage: 'First Harvest', days: '30-40 days', notes: 'Harvest outer leaves. Plant in waves to prevent bolting.'}], feedingSchedule: [{type: 'Nitrogen-rich liquid fertilizer', frequency: 'Every 2-3 weeks', stage: 'After true leaves emerge'}] },
        { name: 'Fernleaf Dill', viability: 'Plant Later', method: 'Direct Sow', window: 'Early Oct', spacing: 1, maturity: 'N/A (Annual herb)', notes: 'Loves mild weather. Plant later in the fall.', type: 'Herb', emoji: '🌿', plantingMonth: 10, seedsToStart: '3-5', successionWaves: 1, growthStages: [{stage: 'Germination', days: '7-14 days', notes: 'Keep moist.'}, {stage: 'First Harvest', days: '40-50 days', notes: 'Harvest leaves as needed. Will bolt in heat.'}], feedingSchedule: [{type: 'Balanced liquid fertilizer', frequency: 'Monthly', stage: 'After establishment'}] },
        { name: 'Cayenne Pepper', viability: 'Gamble', method: 'Start Indoors (Immediately) / Purchase Transplants', window: 'Jul-Aug', spacing: 1, maturity: '70-75 (from transplant)', notes: 'Very late start from seed. Transplants strongly recommended. Frost susceptible.', type: 'Pepper', emoji: '🌶️', plantingMonth: 7, seedsToStart: '3-5', successionWaves: 1, growthStages: [{stage: 'Germination', days: '7-21 days', notes: 'Keep warm (80-85°F).'}, {stage: 'True Leaves', days: '3-4 weeks', notes: 'Thin to strongest seedling. Begin hardening off.'}, {stage: 'Transplant Outdoors', days: '6-8 weeks', notes: 'Acclimate gradually to outdoor conditions.'}, {stage: 'First Harvest', days: '70-75 days after transplant', notes: 'Harvest when peppers are full size and color.'}], feedingSchedule: [{type: 'Balanced liquid fertilizer', frequency: 'Weekly', stage: 'After true leaves until transplant'}, {type: 'Higher potassium fertilizer (e.g., 5-10-10)', frequency: 'Every 2-3 weeks', stage: 'After transplanting and fruit set'}] },
        { name: 'Santa Fe Grande Pepper', viability: 'Gamble', method: 'Start Indoors (Immediately) / Purchase Transplants', window: 'Jul-Aug', spacing: 1, maturity: '80 (from transplant)', notes: 'Very late start from seed. Transplants strongly recommended. Frost susceptible.', type: 'Pepper', emoji: '🌶️', plantingMonth: 7, seedsToStart: '3-5', successionWaves: 1, growthStages: [{stage: 'Germination', days: '7-21 days', notes: 'Keep warm (80-85°F).'}, {stage: 'True Leaves', days: '3-4 weeks', notes: 'Thin to strongest seedling. Begin hardening off.'}, {stage: 'Transplant Outdoors', days: '6-8 weeks', notes: 'Acclimate gradually to outdoor conditions.'}, {stage: 'First Harvest', days: '80-90 days after transplant', notes: 'Harvest when peppers are full size and color.'}], feedingSchedule: [{type: 'Balanced liquid fertilizer', frequency: 'Weekly', stage: 'After true leaves until transplant'}, {type: 'Higher potassium fertilizer (e.g., 5-10-10)', frequency: 'Every 2-3 weeks', stage: 'After transplanting and fruit set'}] },
        { name: 'Cal Wonder Bell Pepper', viability: 'Gamble', method: 'Start Indoors (Immediately) / Purchase Transplants', window: 'Jul-Aug', spacing: 1, maturity: '60-80 (from transplant)', notes: 'Very late start from seed. Transplants strongly recommended. Frost susceptible.', type: 'Pepper', emoji: '🫑', plantingMonth: 7, seedsToStart: '3-5', successionWaves: 1, growthStages: [{stage: 'Germination', days: '7-21 days', notes: 'Keep warm (80-85°F).'}, {stage: 'True Leaves', days: '3-4 weeks', notes: 'Thin to strongest seedling. Begin hardening off.'}, {stage: 'Transplant Outdoors', days: '6-8 weeks', notes: 'Acclimate gradually to outdoor conditions.'}, {stage: 'First Harvest', days: '60-80 days after transplant', notes: 'Harvest when peppers are full size and color.'}], feedingSchedule: [{type: 'Balanced liquid fertilizer', frequency: 'Weekly', stage: 'After true leaves until transplant'}, {type: 'Higher potassium fertilizer (e.g., 5-10-10)', frequency: 'Every 2-3 weeks', stage: 'After transplanting and fruit set'}] },
        { name: 'Jalapeno Pepper', viability: 'Gamble', method: 'Start Indoors (Immediately) / Purchase Transplants', window: 'Jul-Aug', spacing: 1, maturity: '70-80 (from transplant)', notes: 'Very late start from seed. Transplants strongly recommended. Frost susceptible.', type: 'Pepper', emoji: '🌶️', plantingMonth: 7, seedsToStart: '3-5', successionWaves: 1, growthStages: [{stage: 'Germination', days: '7-21 days', notes: 'Keep warm (80-85°F).'}, {stage: 'True Leaves', days: '3-4 weeks', notes: 'Thin to strongest seedling. Begin hardening off.'}, {stage: 'Transplant Outdoors', days: '6-8 weeks', notes: 'Acclimate gradually to outdoor conditions.'}, {stage: 'First Harvest', days: '70-80 days after transplant', notes: 'Harvest when peppers are full size and color.'}], feedingSchedule: [{type: 'Balanced liquid fertilizer', frequency: 'Weekly', stage: 'After true leaves until transplant'}, {type: 'Higher potassium fertilizer (e.g., 5-10-10)', frequency: 'Every 2-3 weeks', stage: 'After transplanting and fruit set'}] },
        { name: 'Chives', viability: 'Plant Later', method: 'Direct Sow', window: 'Early Oct', spacing: 16, maturity: 'N/A (Perennial)', notes: 'Establish for future years.', type: 'Herb', emoji: '🌿', plantingMonth: 10, seedsToStart: '35-45', successionWaves: 1, growthStages: [{stage: 'Germination', days: '7-14 days', notes: 'Keep moist.'}, {stage: 'Establishment', days: 'Ongoing', notes: 'Can harvest lightly in first year. Divide clumps every few years.'}], feedingSchedule: [{type: 'Compost tea / Balanced liquid fertilizer', frequency: 'Monthly', stage: 'After establishment'}] },
        { name: 'Warrior Onion', viability: 'Plant Later', method: 'Direct Sow', window: 'Late Aug-Sep', spacing: 16, maturity: '60 (from direct seed)', notes: 'Cool season. Can stand freezing.', type: 'Root', emoji: '🧅', plantingMonth: 8, seedsToStart: '50-60', successionWaves: 2, successionInterval: '3 weeks', growthStages: [{stage: 'Germination', days: '7-14 days', notes: 'Keep moist.'}, {stage: 'Thinning', days: '3-4 weeks', notes: 'Thin to final spacing for larger bulbs/bunches.'}, {stage: 'Harvest (Bunching)', days: '60-70 days', notes: 'Harvest green tops as needed.'}], feedingSchedule: [{type: 'Balanced liquid fertilizer (higher nitrogen)', frequency: 'Every 2-3 weeks', stage: 'After thinning'}] },
        { name: 'Sugar Baby Watermelon', viability: 'Gamble', method: 'Direct Sow', window: 'Jul-Aug', spacing: 1, maturity: '70-80', notes: 'Needs strong trellis and vine management. Frost susceptible.', type: 'Other', emoji: '🍉', plantingMonth: 7, seedsToStart: '3-5', successionWaves: 1, growthStages: [{stage: 'Germination', days: '7-10 days', notes: 'Plant 1 inch deep. Keep moist.'}, {stage: 'Vining', days: '3-4 weeks', notes: 'Train onto trellis immediately. Prune side shoots.'}, {stage: 'First Fruit Set', days: '50-60 days', notes: 'Hand-pollinate if needed. Support developing fruit.'}, {stage: 'Harvest', days: '70-80 days', notes: 'Harvest when ground spot is yellow and tendril is dry.'}], feedingSchedule: [{type: 'Balanced liquid fertilizer', frequency: 'Every 2-3 weeks', stage: 'After true leaves emerge'}, {type: 'Higher potassium fertilizer', frequency: 'Every 1-2 weeks', stage: 'Once flowering begins'}] },
    ];

    let bedLayouts = {
        '4x2': [
            { name: 'Bed 1: Warm Season', grid: 'grid-cols-4', squares: [
                { plant: 'Cocozelle Zucchini', count: 1, month: 7 }, { plant: 'Armenian Cucumber', count: 1, month: 7 }, { plant: 'Pickling Cucumber', count: 1, month: 7 }, { plant: 'Sugar Baby Watermelon', count: 1, month: 7 },
                { plant: 'Roma II Beans', count: 9, month: 7 }, { plant: 'Blue Lake 156 Beans', count: 9, month: 7 }, { plant: 'Genovese Basil', count: 4, month: 7 }, { plant: 'Marigolds', count: 4, month: 7 }
            ]},
            { name: 'Bed 2: Cool Season', grid: 'grid-cols-4', squares: [
                { plant: 'Baby Leaf Spinach', count: 9, month: 8 }, { plant: 'Bloomsdale Spinach', count: 9, month: 8 }, { plant: 'Little Gem Lettuce', count: 4, month: 8 }, { plant: 'Little Gem Lettuce', count: 4, month: 8 },
                { plant: 'Carnival Blend Carrots', count: 16, month: 9 }, { plant: 'Carnival Blend Carrots', count: 16, month: 9 }, { plant: 'French Dressing Radishes', count: 16, month: 10 }, { plant: 'Cherry Belle Radishes', count: 16, month: 10 }
            ]},
            { name: 'Bed 3: Herbs & Onions', grid: 'grid-cols-4', squares: [
                { plant: 'Greek Oregano', count: 1, month: 7 }, { plant: 'Broad Leaf Sage', count: 1, month: 10 }, { plant: 'Fernleaf Dill', count: 1, month: 10 }, { plant: 'Chives', count: 16, month: 10 },
                { plant: 'Cilantro', count: 9, month: 9 }, { plant: 'Cilantro', count: 9, month: 9 }, { plant: 'Warrior Onion', count: 16, month: 8 }, { plant: 'Warrior Onion', count: 16, month: 8 }
            ]},
            { name: 'Bed 4: Tomato/Pepper Gamble', grid: 'grid-cols-4', squares: [
                { plant: 'Jelly Bean Tomatoes', count: 1, month: 7 }, { plant: 'Big Boy Hybrid Tomatoes', count: 1, month: 7 }, { plant: 'Cayenne Pepper', count: 1, month: 7 }, { plant: 'Jalapeno Pepper', count: 1, month: 7 },
                { plant: 'Santa Fe Grande Pepper', count: 1, month: 7 }, { plant: 'Cal Wonder Bell Pepper', count: 1, month: 7 }, { plant: 'Marigolds', count: 4, month: 7 }, { plant: 'Genovese Basil', count: 4, month: 7 }
            ]}
        ],
        '8x1': [
            { name: 'Bed 1: Vining Crops', grid: 'grid-cols-8', squares: [
                { plant: 'Pickling Cucumber', count: 1, month: 7 }, { plant: 'Armenian Cucumber', count: 1, month: 7 }, { plant: 'Sugar Snap Peas', count: 9, month: 9 }, { plant: 'Sugar Snap Peas', count: 9, month: 9 },
                { plant: 'Sugar Snap Peas', count: 9, month: 9 }, { plant: 'Sugar Snap Peas', count: 9, month: 9 }, { plant: 'Sugar Baby Watermelon', count: 1, month: 7 }, { plant: 'Cocozelle Zucchini', count: 1, month: 7 }
            ]},
            { name: 'Bed 2: Herb & Green Row', grid: 'grid-cols-8', squares: [
                { plant: 'Greek Oregano', count: 1, month: 7 }, { plant: 'Broad Leaf Sage', count: 1, month: 10 }, { plant: 'Genovese Basil', count: 4, month: 7 }, { plant: 'Cilantro', count: 9, month: 9 },
                { plant: 'Cilantro', count: 9, month: 9 }, { plant: 'Fernleaf Dill', count: 1, month: 10 }, { plant: 'Chives', count: 16, month: 10 }, { plant: 'Warrior Onion', count: 16, month: 8 }
            ]}
        ],
        '6x2': [
            { name: 'Bed 1: Mixed Production', grid: 'grid-cols-6', squares: [
                { plant: 'Peppermint San Marzano Tomatoes', count: 1, month: 7 }, { plant: 'Large Cherry Tomatoes', count: 1, month: 7 }, { plant: 'Pickling Cucumber', count: 1, month: 7 }, { plant: 'Armenian Cucumber', count: 1, month: 7 }, { plant: 'Cocozelle Zucchini', count: 1, month: 7 }, { plant: 'Black Elderberry', count: 1, month: 7 },
                { plant: 'Roma II Beans', count: 9, month: 7 }, { plant: 'Blue Lake 156 Beans', count: 9, month: 7 }, { plant: 'Little Gem Lettuce', count: 4, month: 8 }, { plant: 'Baby Leaf Spinach', count: 9, month: 8 }, { plant: 'Marigolds', count: 4, month: 7 }, { plant: 'Genovese Basil', count: 4, month: 7 }
            ]}
        ]
    };

    let swapSuggestions = [
        // 4x2 Bed 4 (Tomato/Pepper Gamble)
        {
            originalPlantName: 'Jelly Bean Tomatoes',
            bedType: '4x2',
            bedName: 'Bed 4: Tomato/Pepper Gamble',
            squareRow: 'A',
            squareCol: 1,
            swapOptions: [
                { name: 'Broccoli Raab', emoji: '🥦', sfgSpacing: 4, plantingMonth: 9, viability: 'Excellent', notes: 'Fast-growing, cool-season leafy green. Good companion to basil and marigolds.', type: 'Greens', method: 'Direct Sow', seedsToStart: '10-15', maturity: '50-60', successionWaves: 2, successionInterval: '3 weeks', growthStages: [{stage: 'Germination', days: '7-10 days'}, {stage: 'First Harvest', days: '50-60 days'}], feedingSchedule: [{type: 'Nitrogen-rich fertilizer', frequency: 'Every 2-3 weeks', stage: 'After true leaves'}] },
                { name: 'Swiss Chard', emoji: '🥬', sfgSpacing: 4, plantingMonth: 9, viability: 'Excellent', notes: 'Hardy, colorful, continuous harvest. Tolerates some heat and cold.', type: 'Greens', method: 'Direct Sow', seedsToStart: '10-15', maturity: '50-60', successionWaves: 2, successionInterval: '3 weeks', growthStages: [{stage: 'Germination', days: '7-14 days'}, {stage: 'First Harvest', days: '50-60 days'}], feedingSchedule: [{type: 'Nitrogen-rich fertilizer', frequency: 'Every 2-3 weeks', stage: 'After true leaves'}] }
            ]
        },
        {
            originalPlantName: 'Big Boy Hybrid Tomatoes',
            bedType: '4x2',
            bedName: 'Bed 4: Tomato/Pepper Gamble',
            squareRow: 'A',
            squareCol: 2,
            swapOptions: [
                { name: 'Tatsoi', emoji: '🍃', sfgSpacing: 9, plantingMonth: 9, viability: 'Excellent', notes: 'Quick-growing, very cold hardy Asian green. Good for cut-and-come-again.', type: 'Greens', method: 'Direct Sow', seedsToStart: '20-25', maturity: '30-45', successionWaves: 3, successionInterval: '2 weeks', growthStages: [{stage: 'Germination', days: '5-10 days'}, {stage: 'First Harvest', days: '30-45 days'}], feedingSchedule: [{type: 'Nitrogen-rich fertilizer', frequency: 'Every 2 weeks', stage: 'After true leaves'}] },
                { name: 'Bok Choy', emoji: '🥬', sfgSpacing: 4, plantingMonth: 9, viability: 'Excellent', notes: 'Quick-growing Asian green, good for fall. Plant in Sep.', type: 'Greens', method: 'Direct Sow', seedsToStart: '10-15', maturity: '45-60', successionWaves: 2, successionInterval: '3 weeks', growthStages: [{stage: 'Germination', days: '7-10 days'}, {stage: 'First Harvest', days: '45-60 days'}], feedingSchedule: [{type: 'Nitrogen-rich fertilizer', frequency: 'Every 2-3 weeks', stage: 'After true leaves'}] }
            ]
        },
        {
            originalPlantName: 'Cayenne Pepper',
            bedType: '4x2',
            bedName: 'Bed 4: Tomato/Pepper Gamble',
            squareRow: 'A',
            squareCol: 3,
            swapOptions: [
                { name: 'Mustard Greens', emoji: '🍃', sfgSpacing: 9, plantingMonth: 9, viability: 'Excellent', notes: 'Quick, spicy, very cold tolerant. Good for fall greens.', type: 'Greens', method: 'Direct Sow', seedsToStart: '20-25', maturity: '30-45', successionWaves: 3, successionInterval: '2 weeks', growthStages: [{stage: 'Germination', days: '3-7 days'}, {stage: 'First Harvest', days: '30-45 days'}], feedingSchedule: [{type: 'Nitrogen-rich fertilizer', frequency: 'Every 2 weeks', stage: 'After true leaves'}] },
                { name: 'Kale (Dwarf)', emoji: '🥬', sfgSpacing: 1, plantingMonth: 9, viability: 'Excellent', notes: 'Very hardy, continuous harvest throughout fall and winter.', type: 'Greens', method: 'Direct Sow', seedsToStart: '3-5', maturity: '50-70', successionWaves: 1, growthStages: [{stage: 'Germination', days: '7-14 days'}, {stage: 'First Harvest', days: '50-70 days'}], feedingSchedule: [{type: 'Nitrogen-rich fertilizer', frequency: 'Every 3-4 weeks', stage: 'After true leaves'}] }
            ]
        },
        {
            originalPlantName: 'Jalapeno Pepper',
            bedType: '4x2',
            bedName: 'Bed 4: Tomato/Pepper Gamble',
            squareRow: 'A',
            squareCol: 4,
            swapOptions: [
                { name: 'Arugula', emoji: '🌿', sfgSpacing: 9, plantingMonth: 9, viability: 'Excellent', notes: 'Fast-growing, peppery green. Tolerates light frost.', type: 'Greens', method: 'Direct Sow', seedsToStart: '20-25', maturity: '20-30', successionWaves: 4, successionInterval: '1-2 weeks', growthStages: [{stage: 'Germination', days: '3-7 days'}, {stage: 'First Harvest', days: '20-30 days'}], feedingSchedule: [{type: 'Nitrogen-rich fertilizer', frequency: 'Every 2 weeks', stage: 'After true leaves'}] },
                { name: 'Spinach (Extra)', emoji: '🍃', sfgSpacing: 9, plantingMonth: 8, viability: 'Excellent', notes: 'More of your existing spinach. Reliable cool-season crop.', type: 'Greens', method: 'Direct Sow', seedsToStart: '20-25', maturity: '25-50', successionWaves: 3, successionInterval: '2 weeks', growthStages: [{stage: 'Germination', days: '5-9 days'}, {stage: 'Baby Leaf Harvest', days: '25-30 days'}], feedingSchedule: [{type: 'Nitrogen-rich fertilizer', frequency: 'Every 2 weeks', stage: 'After true leaves'}] }
            ]
        },
        {
            originalPlantName: 'Santa Fe Grande Pepper',
            bedType: '4x2',
            bedName: 'Bed 4: Tomato/Pepper Gamble',
            squareRow: 'B',
            squareCol: 1,
            swapOptions: [
                { name: 'Radishes (Extra)', emoji: '🌶️', sfgSpacing: 16, plantingMonth: 10, viability: 'Excellent', notes: 'More of your existing radishes. Very fast, good for succession.', type: 'Root', method: 'Direct Sow', seedsToStart: '20-25', maturity: '22-35', successionWaves: 4, successionInterval: '1-2 weeks', growthStages: [{stage: 'Germination', days: '3-7 days'}, {stage: 'Harvest', days: '22-35 days'}], feedingSchedule: [{type: 'None/Minimal', frequency: 'N/A', stage: 'Generally not required'}] },
                { name: 'Carrots (Extra)', emoji: '🥕', sfgSpacing: 16, plantingMonth: 9, viability: 'Excellent', notes: 'More of your existing carrots. Reliable cool-season root crop.', type: 'Root', method: 'Direct Sow', seedsToStart: '40-50', maturity: '65-75', successionWaves: 2, successionInterval: '3 weeks', growthStages: [{stage: 'Germination', days: '7-21 days'}, {stage: 'Harvest', days: '65-75 days'}], feedingSchedule: [{type: 'Balanced fertilizer (low nitrogen)', frequency: 'Every 3-4 weeks', stage: 'After thinning'}] }
            ]
        },
        {
            originalPlantName: 'Cal Wonder Bell Pepper',
            bedType: '4x2',
            bedName: 'Bed 4: Tomato/Pepper Gamble',
            squareRow: 'B',
            squareCol: 2,
            swapOptions: [
                { name: 'Lettuce (Extra)', emoji: '🥬', sfgSpacing: 4, plantingMonth: 8, viability: 'Excellent', notes: 'More of your existing lettuce. Good for fall greens.', type: 'Greens', method: 'Direct Sow', seedsToStart: '15-20', maturity: '25-55', successionWaves: 3, successionInterval: '2 weeks', growthStages: [{stage: 'Germination', days: '7-10 days'}, {stage: 'Baby Leaf Harvest', days: '25-30 days'}], feedingSchedule: [{type: 'Nitrogen-rich fertilizer', frequency: 'Every 2 weeks', stage: 'After true leaves'}] },
                { name: 'Cilantro (Extra)', emoji: '🌿', sfgSpacing: 9, plantingMonth: 9, viability: 'Excellent', notes: 'More of your existing cilantro. Cool-season herb.', type: 'Herb', method: 'Direct Sow', seedsToStart: '20-25', maturity: '45-70', successionWaves: 3, successionInterval: '2 weeks', growthStages: [{stage: 'Germination', days: '7-14 days'}, {stage: 'First Harvest', days: '30-40 days'}], feedingSchedule: [{type: 'Nitrogen-rich fertilizer', frequency: 'Every 2-3 weeks', stage: 'After true leaves'}] }
            ]
        },
        // 4x2 Bed 1 (Warm Season)
        {
            originalPlantName: 'Butternut Squash',
            bedType: '4x2',
            bedName: 'Bed 1: Warm Season',
            squareRow: 'A',
            squareCol: 1,
            swapOptions: [
                { name: 'Bush Beans (Green)', emoji: '🫘', sfgSpacing: 9, plantingMonth: 7, viability: 'Good', notes: 'Reliable, nitrogen fixer. Good for succession planting.', type: 'Bean', method: 'Direct Sow', seedsToStart: '20-25', maturity: '55-60', successionWaves: 2, successionInterval: '2 weeks', growthStages: [{stage: 'Germination', days: '7-10 days'}, {stage: 'First Harvest', days: '55-60 days'}], feedingSchedule: [{type: 'Balanced fertilizer (low nitrogen)', frequency: 'Every 3-4 weeks', stage: 'After flowering'}] },
                { name: 'Pickling Cucumber (Extra)', emoji: '🥒', sfgSpacing: 2, plantingMonth: 7, viability: 'Good', notes: 'Extend your cucumber harvest. Needs trellis.', type: 'Cucumber', method: 'Direct Sow', seedsToStart: '5-7', maturity: '45-53', successionWaves: 2, successionInterval: '3 weeks', growthStages: [{stage: 'Germination', days: '3-10 days'}, {stage: 'First Fruit Set', days: '35-40 days'}], feedingSchedule: [{type: 'Balanced fertilizer', frequency: 'Every 2 weeks', stage: 'After true leaves'}, {type: 'Higher potassium fertilizer', frequency: 'Every 1-2 weeks', stage: 'Once flowering'}] }
            ]
        },
        {
            originalPlantName: 'Sugar Baby Watermelon',
            bedType: '4x2',
            bedName: 'Bed 1: Warm Season',
            squareRow: 'A',
            squareCol: 4,
            swapOptions: [
                { name: 'Malabar Spinach', emoji: '🌿', sfgSpacing: 1, plantingMonth: 7, viability: 'Good', notes: 'Heat-tolerant vining green. Needs trellis.', type: 'Greens', method: 'Direct Sow', seedsToStart: '3-5', maturity: '30-40', successionWaves: 1, growthStages: [{stage: 'Germination', days: '7-14 days'}, {stage: 'First Harvest', days: '30-40 days'}], feedingSchedule: [{type: 'Nitrogen-rich fertilizer', frequency: 'Every 2-3 weeks', stage: 'After true leaves'}] },
                { name: 'Sugar Snap Peas (Extra)', emoji: '🫛', sfgSpacing: 9, plantingMonth: 9, viability: 'Excellent', notes: 'Reliable cool-season vining crop. Nitrogen fixer. Plant in Sep.', type: 'Pea', method: 'Direct Sow', seedsToStart: '40-50', maturity: '60-80', successionWaves: 2, successionInterval: '3 weeks', growthStages: [{stage: 'Germination', days: '7-14 days'}, {stage: 'First Harvest', days: '60-80 days'}], feedingSchedule: [{type: 'Balanced fertilizer (low nitrogen)', frequency: 'Every 3-4 weeks', stage: 'After flowering'}] }
            ]
        },
        // 8x1 Bed 1 (Vining Crops)
        {
            originalPlantName: 'Sugar Baby Watermelon',
            bedType: '8x1',
            bedName: 'Bed 1: Vining Crops',
            squareRow: 'A', 
            squareCol: 7,
            swapOptions: [
                { name: 'Malabar Spinach', emoji: '🌿', sfgSpacing: 1, plantingMonth: 7, viability: 'Good', notes: 'Heat-tolerant vining green. Needs trellis.', type: 'Greens', method: 'Direct Sow', seedsToStart: '3-5', maturity: '30-40', successionWaves: 1, growthStages: [{stage: 'Germination', days: '7-14 days'}, {stage: 'First Harvest', days: '30-40 days'}], feedingSchedule: [{type: 'Nitrogen-rich fertilizer', frequency: 'Every 2-3 weeks', stage: 'After true leaves'}] },
                { name: 'Armenian Cucumber (Extra)', emoji: '🥒', sfgSpacing: 2, plantingMonth: 7, viability: 'Good', notes: 'Reliable vining cucumber. Needs trellis.', type: 'Cucumber', method: 'Direct Sow', seedsToStart: '5-7', maturity: '60-75', successionWaves: 2, successionInterval: '3 weeks', growthStages: [{stage: 'Germination', days: '3-10 days'}, {stage: 'First Fruit Set', days: '50-60 days'}], feedingSchedule: [{type: 'Balanced fertilizer', frequency: 'Every 2 weeks', stage: 'After true leaves'}, {type: 'Higher potassium fertilizer', frequency: 'Every 1-2 weeks', stage: 'Once flowering'}] }
            ]
        },
        // 6x2 Bed 1 (Mixed Production)
        {
            originalPlantName: 'Peppermint San Marzano Tomatoes',
            bedType: '6x2',
            bedName: 'Bed 1: Mixed Production',
            squareRow: 'A',
            squareCol: 1,
            swapOptions: [
                { name: 'Swiss Chard', emoji: '🥬', sfgSpacing: 4, plantingMonth: 9, viability: 'Excellent', notes: 'Hardy, colorful, continuous harvest. Tolerates some heat and cold.', type: 'Greens', method: 'Direct Sow', seedsToStart: '10-15', maturity: '50-60', successionWaves: 2, successionInterval: '3 weeks', growthStages: [{stage: 'Germination', days: '7-14 days'}, {stage: 'First Harvest', days: '50-60 days'}], feedingSchedule: [{type: 'Nitrogen-rich fertilizer', frequency: 'Every 2-3 weeks', stage: 'After true leaves'}] },
                { name: 'Bok Choy', emoji: '🥬', sfgSpacing: 4, plantingMonth: 9, viability: 'Excellent', notes: 'Quick-growing Asian green, good for fall. Plant in Sep.', type: 'Greens', method: 'Direct Sow', seedsToStart: '10-15', maturity: '45-60', successionWaves: 2, successionInterval: '3 weeks', growthStages: [{stage: 'Germination', days: '7-10 days'}, {stage: 'First Harvest', days: '45-60 days'}], feedingSchedule: [{type: 'Nitrogen-rich fertilizer', frequency: 'Every 2-3 weeks', stage: 'After true leaves'}] }
            ]
        },
        {
            originalPlantName: 'Large Cherry Tomatoes',
            bedType: '6x2',
            bedName: 'Bed 1: Mixed Production',
            squareRow: 'A',
            squareCol: 2,
            swapOptions: [
                { name: 'Broccoli Raab', emoji: '🥦', sfgSpacing: 4, plantingMonth: 9, viability: 'Excellent', notes: 'Fast-growing, cool-season leafy green. Good companion to basil and marigolds.', type: 'Greens', method: 'Direct Sow', seedsToStart: '10-15', maturity: '50-60', successionWaves: 2, successionInterval: '3 weeks', growthStages: [{stage: 'Germination', days: '7-10 days'}, {stage: 'First Harvest', days: '50-60 days'}], feedingSchedule: [{type: 'Nitrogen-rich fertilizer', frequency: 'Every 2-3 weeks', stage: 'After true leaves'}] },
                { name: 'Mustard Greens', emoji: '🍃', sfgSpacing: 9, plantingMonth: 9, viability: 'Excellent', notes: 'Quick, spicy, very cold tolerant. Good for fall greens.', type: 'Greens', method: 'Direct Sow', seedsToStart: '20-25', maturity: '30-45', successionWaves: 3, successionInterval: '2 weeks', growthStages: [{stage: 'Germination', days: '3-7 days'}, {stage: 'First Harvest', days: '30-45 days'}], feedingSchedule: [{type: 'Nitrogen-rich fertilizer', frequency: 'Every 2 weeks', stage: 'After true leaves'}] }
            ]
        }
    ];

    const plantLibraryContainer = document.getElementById('plant-library');
    const modal = document.getElementById('plantModal');
    const modalBody = document.getElementById('modal-body');
    const bedTypeSelector = document.getElementById('bed-type-selector');
    const bedLayoutContainer = document.getElementById('bed-layout-container');
    const actionPlanContainer = document.getElementById('action-plan-container');
    const resetFilterBtn = document.getElementById('reset-filter-btn');
    const swapSuggestionsContainer = document.getElementById('swap-suggestions-container');
    const actionPlanFilters = document.getElementById('action-plan-filters');
    const seedsToOrderList = document.getElementById('seeds-to-order-list');
    const downloadSeedsBtn = document.getElementById('download-seeds-btn');
    const bedTimelineControls = document.getElementById('bed-timeline-controls');
    const addPlantBtn = document.getElementById('add-plant-btn');
    const addBedBtn = document.getElementById('add-bed-btn');
    const plantFormModal = document.getElementById('plantFormModal');
    const plantForm = document.getElementById('plant-form');
    const plantNameInput = document.getElementById('plant-name');
    const plantEmojiInput = document.getElementById('plant-emoji');
    const plantViabilityInput = document.getElementById('plant-viability');
    const plantMethodInput = document.getElementById('plant-method');
    const plantWindowInput = document.getElementById('plant-window');
    const plantSpacingInput = document.getElementById('plant-spacing');
    const plantMaturityInput = document.getElementById('plant-maturity');
    const plantNotesInput = document.getElementById('plant-notes');
    const plantTypeInput = document.getElementById('plant-type');
    const plantMonthInput = document.getElementById('plant-month');
    const bedFormModal = document.getElementById('bedFormModal');
    const bedForm = document.getElementById('bed-form');
    const bedNameInput = document.getElementById('bed-name');
    const bedColsInput = document.getElementById('bed-cols');
    const bedRowsInput = document.getElementById('bed-rows');

    const locationDisplay = document.getElementById('location-display');
    const zoneDisplay = document.getElementById('zone-display');
    const editLocationBtn = document.getElementById('edit-location-btn');
    const locationFormModal = document.getElementById('locationFormModal');
    const zipInput = document.getElementById('zip-input');
    const saveLocationBtn = document.getElementById('save-location-btn');
    let editPlantIndex = null;
    let editBedType = null;
    let editBedIndex = null;
    let currentBedType = '4x2';

    let currentActionPlanFilter = 'All'; // Default filter for action plan
    let seedsToOrder = [];

    let actionPlanData = { filter: 'All' };

    const zipData = {
        "77316": {city: "Montgomery", state: "TX", zone: "9a"},
        "10001": {city: "New York", state: "NY", zone: "7b"},
        "90210": {city: "Beverly Hills", state: "CA", zone: "10b"},
        "33109": {city: "Miami Beach", state: "FL", zone: "11a"},
        "60601": {city: "Chicago", state: "IL", zone: "6a"},
        "80202": {city: "Denver", state: "CO", zone: "5b"},
        "98101": {city: "Seattle", state: "WA", zone: "8b"},
        "85001": {city: "Phoenix", state: "AZ", zone: "9b"},
        "55401": {city: "Minneapolis", state: "MN", zone: "4b"},
        "97201": {city: "Portland", state: "OR", zone: "8b"},
        "27601": {city: "Raleigh", state: "NC", zone: "7b"},
        "75201": {city: "Dallas", state: "TX", zone: "8b"},
        "02108": {city: "Boston", state: "MA", zone: "6b"},
        "84101": {city: "Salt Lake City", state: "UT", zone: "7a"},
        "96813": {city: "Honolulu", state: "HI", zone: "11b"},
        "04101": {city: "Portland", state: "ME", zone: "5b"},
    };

    async function lookupZip(zip) {
        try {
            const zoneRes = await fetch(`https://phzmapi.org/${zip}.json`);
            if (!zoneRes.ok) throw new Error('Zone lookup failed');
            const zoneJson = await zoneRes.json();

            const locRes = await fetch(`https://api.zippopotam.us/us/${zip}`);
            if (!locRes.ok) throw new Error('City lookup failed');
            const locJson = await locRes.json();

            const place = locJson.places && locJson.places[0];
            if (!place) throw new Error('No city found');

            return {
                city: place['place name'],
                state: place['state abbreviation'],
                zone: zoneJson.zone
            };
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    const defaultLocation = {zip: "77316", ...zipData["77316"]};
    let userLocation = {...defaultLocation};

    function loadData() {
        const storedPlants = localStorage.getItem('plantLibrary');
        if (storedPlants) {
            plantData = JSON.parse(storedPlants);
        }
        const storedBeds = localStorage.getItem('bedLayouts');
        if (storedBeds) {
            bedLayouts = JSON.parse(storedBeds);
        }
        const storedPlan = localStorage.getItem('actionPlan');
        if (storedPlan) {
            actionPlanData = JSON.parse(storedPlan);
            if (actionPlanData.filter) {
                currentActionPlanFilter = actionPlanData.filter;
            }
        }
        const storedSeeds = localStorage.getItem('seedList');
        if (storedSeeds) {
            seedsToOrder = JSON.parse(storedSeeds);
        }
        const storedLocation = localStorage.getItem('userLocation');
        if (storedLocation) {
            userLocation = JSON.parse(storedLocation);
        }
    }

    function saveData() {
        localStorage.setItem('plantLibrary', JSON.stringify(plantData));
        localStorage.setItem('bedLayouts', JSON.stringify(bedLayouts));
        localStorage.setItem('actionPlan', JSON.stringify(actionPlanData));
        localStorage.setItem('seedList', JSON.stringify(seedsToOrder));
        localStorage.setItem('userLocation', JSON.stringify(userLocation));
    }

    function updateLocationUI() {
        locationDisplay.textContent = `${userLocation.city}, ${userLocation.state}`;
        zoneDisplay.textContent = `USDA Zone ${userLocation.zone}`;
        zipInput.value = userLocation.zip || '';
    }

    loadData();
    currentBedType = Object.keys(bedLayouts)[0] || currentBedType;
    updateLocationUI();

    const viabilityClasses = {
        'Good': 'border-green-accent',
        'Excellent': 'border-green-accent', // Added for new suggestions
        'Gamble': 'border-yellow-accent',
        'Plant Later': 'border-blue-accent',
        'Winter Project': 'border-gray-400'
    };

    const monthColors = {
        7: 'bg-red-200',
        8: 'bg-orange-200',
        9: 'bg-yellow-200',
        10: 'bg-green-200',
        11: 'bg-blue-200',
        12: 'bg-purple-200',
    };

    const actionMilestones = [
        { name: 'Soil Prep & Seed Start', start: 7.8, end: 8.5 },
        { name: 'Late Aug - Mid Sep Sowing', start: 8.7, end: 9.5 },
        { name: 'Mid Sep - Early Oct Sowing', start: 9.5, end: 10.2 },
        { name: 'Ongoing Care & Harvest', start: 10.0, end: 11.5 },
        { name: 'Final Harvest & Frost', start: 11.0, end: 12.0 }
    ];


    function getMilestonesForType(filterType) {
        if (filterType === 'All') {
            return actionMilestones;
        }
        const typeMap = {
            'Greens': ['Greens'],
            'Fruiting': ['Tomato','Pepper','Cucumber','Squash','Watermelon','Bean','Pea'],
            'Roots': ['Root'],
            'Herbs': ['Herb'],
            'Flowers': ['Flower'],
            'Other': ['Other']
        };
        const validTypes = typeMap[filterType] || [];
        const plants = plantData.filter(p => validTypes.includes(p.type));
        if (plants.length === 0) return actionMilestones;
        const months = plants.map(p => p.plantingMonth);
        const start = Math.min(...months);
        const end = Math.max(...months);
        return [
            { name: 'Seed Start', start: start - 0.2, end: start + 0.4 },
            { name: 'Planting Window', start: start + 0.4, end: end + 0.2 },
            { name: 'Harvest Window', start: end + 0.3, end: 12.0 }
        ];
    }


    function renderPlantLibrary(filterFn = () => true) {
        plantLibraryContainer.innerHTML = '';
        // Sort plantData alphabetically for consistent display
        const sortedPlantData = [...plantData].sort((a, b) => a.name.localeCompare(b.name));
        sortedPlantData.filter(filterFn).forEach(plant => {
            const card = document.createElement('div');
            card.className = `plant-card bg-white p-4 rounded-lg shadow-md cursor-pointer border-l-4 ${viabilityClasses[plant.viability] || 'border-gray-300'}`;
            card.innerHTML = `
                <div class="text-3xl mb-2">${plant.emoji}</div>
                <h4 class="font-semibold">${plant.name}</h4>
                <p class="text-sm text-gray-500">${plant.viability}</p>
            `;
            card.onclick = () => openModal(plant);
            plantLibraryContainer.appendChild(card);
        });
    }

    window.openModal = function(plant) {
        const idx = plantData.indexOf(plant);
        modalBody.innerHTML = `
            <div class="flex items-center gap-4">
                <div class="text-5xl">${plant.emoji}</div>
                <div>
                    <h3 class="text-2xl font-bold">${plant.name}</h3>
                    <p class="text-lg ${viabilityClasses[plant.viability].replace('border', 'text')} font-semibold">${plant.viability}</p>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-4 text-center">
                <div class="bg-secondary p-3 rounded-lg">
                    <p class="text-sm font-medium text-gray-500">Spacing</p>
                    <p class="text-lg font-semibold">${plant.spacing} / sq ft</p>
                </div>
                <div class="bg-secondary p-3 rounded-lg">
                    <p class="text-sm font-medium text-gray-500">Maturity</p>
                    <p class="text-lg font-semibold">${plant.maturity} days</p>
                </div>
            </div>
            <div>
                <h4 class="font-semibold mt-4">Planting Window:</h4>
                <p>${plant.window}</p>
            </div>
            <div>
                <h4 class="font-semibold mt-2">Method:</h4>
                <p>${plant.method}</p>
            </div>
            ${plant.seedsToStart ? `
            <div>
                <h4 class="font-semibold mt-2">Seeds to Start:</h4>
                <p>${plant.seedsToStart} seeds</p>
            </div>
            ` : ''}
            <div>
                <h4 class="font-semibold mt-2">Notes:</h4>
                <p>${plant.notes}</p>
            </div>
            ${plant.growthStages && plant.growthStages.length > 0 ? `
            <div class="mt-4">
                <h4 class="font-semibold">Growth Milestones:</h4>
                <ul class="list-disc pl-5 space-y-1">
                    ${plant.growthStages.map(stage => `<li><strong>${stage.stage}:</strong> ${stage.days} - ${stage.notes}</li>`).join('')}
                </ul>
            </div>
            ` : ''}
            ${plant.feedingSchedule && plant.feedingSchedule.length > 0 ? `
            <div class="mt-4">
                <h4 class="font-semibold">Feeding Schedule:</h4>
                <ul class="list-disc pl-5 space-y-1">
                    ${plant.feedingSchedule.map(feed => `<li><strong>${feed.stage}:</strong> ${feed.type} (${feed.frequency})</li>`).join('')}
                </ul>
            </div>
            ` : ''}
            <div class="flex gap-2 mt-4">
                <button class="flex-1 bg-blue-accent text-white px-4 py-2 rounded" onclick="openPlantForm(${idx})">Edit</button>
                <button class="flex-1 bg-red-500 text-white px-4 py-2 rounded" onclick="deletePlant(${idx})">Delete</button>
            </div>
        `;
        modal.style.display = 'flex';
    }

    window.closeModal = function() {
        modal.style.display = 'none';
    }

    window.openPlantForm = function(index = null) {
        editPlantIndex = index;
        if (index !== null) {
            const plant = plantData[index];
            plantNameInput.value = plant.name || '';
            plantEmojiInput.value = plant.emoji || '';
            plantViabilityInput.value = plant.viability || '';
            plantMethodInput.value = plant.method || '';
            plantWindowInput.value = plant.window || '';
            plantSpacingInput.value = plant.spacing || '';
            plantMaturityInput.value = plant.maturity || '';
            plantNotesInput.value = plant.notes || '';
            plantTypeInput.value = plant.type || '';
            plantMonthInput.value = plant.plantingMonth || '';
        } else {
            plantForm.reset();
        }
        plantFormModal.style.display = 'flex';
    }

    window.closePlantFormModal = function() {
        plantFormModal.style.display = 'none';
    }

    window.deletePlant = function(index) {
        if (confirm('Delete this plant?')) {
            plantData.splice(index, 1);
            renderPlantLibrary();
            saveData();
            closeModal();
        }
    }

    window.openBedForm = function(type = null, index = null) {
        editBedType = type;
        editBedIndex = index;
        if (type !== null && index !== null) {
            const bed = bedLayouts[type][index];
            bedNameInput.value = bed.name || '';
            const [c, r] = type.split('x').map(n => parseInt(n));
            bedColsInput.value = c;
            bedRowsInput.value = r;
        } else {
            bedForm.reset();
        }
        bedFormModal.style.display = 'flex';
    }

    window.closeBedFormModal = function() {
        bedFormModal.style.display = 'none';
    }


    window.openLocationFormModal = function() {
        locationFormModal.style.display = 'flex';
    }


    window.closeLocationFormModal = function() {
        locationFormModal.style.display = 'none';
    }

    window.deleteBed = function(type, index) {
        if (confirm('Delete this bed?')) {
            bedLayouts[type].splice(index, 1);
            if (bedLayouts[type].length === 0) {
                delete bedLayouts[type];
                if (currentBedType === type) {
                    currentBedType = Object.keys(bedLayouts)[0] || '';
                }
            }
            setupBedSelectors();
            if (currentBedType) renderBedLayouts(currentBedType);
            saveData();
        }
    }

    function renderBedLayouts(bedType) {
        bedLayoutContainer.innerHTML = '';
        const beds = bedLayouts[bedType] || [];
        beds.forEach((bed, idx) => {
            const bedDiv = document.createElement('div');
            bedDiv.className = 'mb-8';
            bedDiv.innerHTML = `
                <div class="flex justify-between items-center mb-3">
                    <h3 class="text-xl font-semibold">${bed.name} (${bedType})</h3>
                    <div class="flex gap-2">
                        <button class="px-2 py-1 bg-blue-accent text-white rounded" onclick="openBedForm('${bedType}', ${idx})">Edit</button>
                        <button class="px-2 py-1 bg-red-500 text-white rounded" onclick="deleteBed('${bedType}', ${idx})">Delete</button>
                    </div>
                </div>`;

            const gridContainer = document.createElement('div');
            gridContainer.className = `garden-bed-grid ${bed.grid} max-w-md mx-auto bg-gray-200 p-1 rounded-md`;
            
            bed.squares.forEach(square => {
                const plantInfo = plantData.find(p => p.name === square.plant);
                const viabilityClass = plantInfo ? viabilityClasses[plantInfo.viability] : 'border-gray-300';
                const squareDiv = document.createElement('div');
                squareDiv.className = `garden-square ${monthColors[square.month]} rounded flex items-center justify-center text-xs text-center p-1 border-l-4 ${viabilityClass}`;
                squareDiv.innerHTML = `
                    <span>${square.plant.split(' ')[0]}</span>
                    <div class="tooltip bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                        ${square.plant}<br>(${square.count}/sq ft)
                    </div>
                `;
                gridContainer.appendChild(squareDiv);
            });
            
            bedDiv.appendChild(gridContainer);
            bedLayoutContainer.appendChild(bedDiv);
        });
    }

    function setupBedSelectors() {
        bedTypeSelector.innerHTML = ''; // Clear existing buttons
        Object.keys(bedLayouts).forEach((type, index) => {
            const button = document.createElement('button');
            button.className = 'px-4 py-2 rounded-full transition';
            button.textContent = `Show ${type} Beds`;
            if (index === 0) {
                button.classList.add('bg-green-accent', 'text-white');
            } else {
                button.classList.add('bg-secondary');
            }
            button.onclick = () => {
                document.querySelectorAll('#bed-type-selector button').forEach(btn => {
                    btn.classList.remove('bg-green-accent', 'text-white');
                    btn.classList.add('bg-secondary');
                });
                button.classList.add('bg-green-accent', 'text-white');
                button.classList.remove('bg-secondary');
                currentBedType = type;
                renderBedLayouts(currentBedType);
            };
            bedTypeSelector.appendChild(button);
        });
    }

    function generatePhaseContent(phase, filterType = 'All') {
        let contentHtml = '<ul class="list-disc pl-5 space-y-2">';
        let plantsForPhase = [];

        if (phase === 1) { // Late July - Mid-August
            plantsForPhase = plantData.filter(p => p.plantingMonth === 7 && (p.method.includes('Direct Sow') || p.method.includes('Start Indoors')));
            contentHtml += `
                <li><strong>Soil Preparation (All Beds):</strong> Immediately clear all beds of old plants and weeds. Amend soil with 1-2 inches of sand and 2-3 inches of compost. Mix in a slow-release fertilizer (2-3 lbs per 100 sq ft). Water deeply for two hours and let dry for a few days.</li>
                <li><strong>Warm-Season Seed Starting (Indoors - High Risk/Gamble):</strong> Start the following seeds indoors immediately on a heat mat (70-85°F). Note: Purchasing transplants is highly recommended for a better fall harvest.
                    <ul class="list-circle pl-5 mt-2">
            `;
            plantsForPhase.filter(p => p.method.includes('Start Indoors') && (filterType === 'All' || p.type === filterType || (filterType === 'Fruiting' && (p.type === 'Tomato' || p.type === 'Pepper' || p.type === 'Squash' || p.type === 'Cucumber')))).forEach(plant => {
                contentHtml += `<li>${plant.name}: Start ${plant.seedsToStart} seeds`;
                if (plant.successionWaves && plant.successionWaves > 1) {
                    contentHtml += ` (in ${plant.successionWaves} waves, every ${plant.successionInterval})`;
                }
                contentHtml += `
                    <ul class="list-square pl-5 mt-1 text-sm text-gray-600">
                        ${plant.growthStages ? plant.growthStages.map(stage => `<li><strong>${stage.stage}:</strong> ${stage.days} - ${stage.notes}</li>`).join('') : ''}
                        ${plant.feedingSchedule ? plant.feedingSchedule.map(feed => `<li><strong>Feed (${feed.stage}):</strong> ${feed.type} (${feed.frequency})</li>`).join('') : ''}
                    </ul>
                </li>`;
            });
            contentHtml += `</ul></li>`;
            contentHtml += `
                <li><strong>Immediate Direct Sowing (Outdoors):</strong> Plant seeds for the following:
                    <ul class="list-circle pl-5 mt-2">
            `;
            plantsForPhase.filter(p => p.method.includes('Direct Sow') && (filterType === 'All' || p.type === filterType || (filterType === 'Fruiting' && (p.type === 'Tomato' || p.type === 'Pepper' || p.type === 'Squash' || p.type === 'Cucumber')))).forEach(plant => {
                contentHtml += `<li>${plant.name}: Sow ${plant.seedsToStart} seeds`;
                if (plant.successionWaves && plant.successionWaves > 1) {
                    contentHtml += ` (in ${plant.successionWaves} waves, every ${plant.successionInterval})`;
                }
                contentHtml += `
                    <ul class="list-square pl-5 mt-1 text-sm text-gray-600">
                        ${plant.growthStages ? plant.growthStages.map(stage => `<li><strong>${stage.stage}:</strong> ${stage.days} - ${stage.notes}</li>`).join('') : ''}
                        ${plant.feedingSchedule ? plant.feedingSchedule.map(feed => `<li><strong>Feed (${feed.stage}):</strong> ${feed.type} (${feed.frequency})</li>`).join('') : ''}
                    </ul>
                </li>`;
            });
            contentHtml += `
                    </ul>
                </li>
                <li><strong>Initial Care:</strong> Water all new plantings thoroughly. Once seedlings emerge, thin them to the correct spacing. Apply a 2-3 inch layer of mulch to retain moisture and suppress weeds. Begin daily pest checks.</li>
            `;
        } else if (phase === 2) { // Late August - September
            plantsForPhase = plantData.filter(p => (p.plantingMonth === 8 || p.plantingMonth === 9 || p.plantingMonth === 10) && p.method.includes('Direct Sow'));
            contentHtml += `<li><strong>Late August - Mid-September Sowing:</strong> Direct sow the following:
                    <ul class="list-circle pl-5 mt-2">
            `;
            plantsForPhase.filter(p => (p.plantingMonth === 8 || p.plantingMonth === 9) && (filterType === 'All' || p.type === filterType || (filterType === 'Fruiting' && (p.type === 'Tomato' || p.type === 'Pepper' || p.type === 'Squash' || p.type === 'Cucumber')))).forEach(plant => {
                contentHtml += `<li>${plant.name}: Sow ${plant.seedsToStart} seeds`;
                if (plant.successionWaves && plant.successionWaves > 1) {
                    contentHtml += ` (in ${plant.successionWaves} waves, every ${plant.successionInterval})`;
                }
                contentHtml += `
                    <ul class="list-square pl-5 mt-1 text-sm text-gray-600">
                        ${plant.growthStages ? plant.growthStages.map(stage => `<li><strong>${stage.stage}:</strong> ${stage.days} - ${stage.notes}</li>`).join('') : ''}
                        ${plant.feedingSchedule ? plant.feedingSchedule.map(feed => `<li><strong>Feed (${feed.stage}):</strong> ${feed.type} (${feed.frequency})</li>`).join('') : ''}
                    </ul>
                </li>`;
            });
            contentHtml += `</ul></li>`;
            contentHtml += `<li><strong>Mid-September - Early October Sowing:</strong> Direct sow the following:
                    <ul class="list-circle pl-5 mt-2">
            `;
            plantsForPhase.filter(p => p.plantingMonth === 10 && (filterType === 'All' || p.type === filterType || (filterType === 'Fruiting' && (p.type === 'Tomato' || p.type === 'Pepper' || p.type === 'Squash' || p.type === 'Cucumber')))).forEach(plant => {
                contentHtml += `<li>${plant.name}: Sow ${plant.seedsToStart} seeds`;
                if (plant.successionWaves && plant.successionWaves > 1) {
                    contentHtml += ` (in ${plant.successionWaves} waves, every ${plant.successionInterval})`;
                }
                contentHtml += `
                    <ul class="list-square pl-5 mt-1 text-sm text-gray-600">
                        ${plant.growthStages ? plant.growthStages.map(stage => `<li><strong>${stage.stage}:</strong> ${stage.days} - ${stage.notes}</li>`).join('') : ''}
                        ${plant.feedingSchedule ? plant.feedingSchedule.map(feed => `<li><strong>Feed (${feed.stage}):</strong> ${feed.type} (${feed.frequency})</li>`).join('') : ''}
                    </ul>
                </li>`;
            });
            contentHtml += `
                    </ul>
                </li>
                <li><strong>Ongoing Care:</strong> Fertilize established plants every 3 weeks with a high-nitrogen fertilizer (e.g., 1 tbsp of 21-0-0 per plant, watered in). Continue deep, consistent watering and train vining plants onto trellises.</li>
            `;
        } else if (phase === 3) { // October - December
            plantsForPhase = plantData.filter(p => (p.plantingMonth === 10 || p.plantingMonth === 11 || p.plantingMonth === 12));
            contentHtml += `
                <li><strong>Harvesting:</strong> Begin harvesting quick-maturing crops like radishes, spinach, and lettuce. Harvest regularly to encourage more production.</li>
                <li><strong>Succession Planting:</strong> As you harvest, amend the empty square with compost and re-sow with more fast-growing greens or radishes.
                    <ul class="list-circle pl-5 mt-2">
            `;
            plantsForPhase.filter(p => (p.name.includes('Radishes') || p.name.includes('Lettuce') || p.name.includes('Spinach')) && (p.plantingMonth === 10 || p.plantingMonth === 11) && (filterType === 'All' || p.type === filterType || (filterType === 'Fruiting' && (p.type === 'Tomato' || p.type === 'Pepper' || p.type === 'Squash' || p.type === 'Cucumber')))).forEach(plant => {
                 contentHtml += `<li>${plant.name}: Sow ${plant.seedsToStart} seeds (Late Oct-Early Nov)`;
                 if (plant.successionWaves && plant.successionWaves > 1) {
                    contentHtml += ` (in ${plant.successionWaves} waves, every ${plant.successionInterval})`;
                }
                 contentHtml += `
                    <ul class="list-square pl-5 mt-1 text-sm text-gray-600">
                        ${plant.growthStages ? plant.growthStages.map(stage => `<li><strong>${stage.stage}:</strong> ${stage.days} - ${stage.notes}</li>`).join('') : ''}
                        ${plant.feedingSchedule ? plant.feedingSchedule.map(feed => `<li><strong>Feed (${feed.stage}):</strong> ${feed.type} (${feed.frequency})</li>`).join('') : ''}
                    </ul>
                </li>`;
            });
            contentHtml += `
                    </ul>
                </li>
                <li><strong>Pest Management:</strong> Continue monitoring for pests. Hand-pick larger insects or use organic sprays like neem oil in the evening to protect pollinators.</li>
                <li><strong>Ranunculus Planting:</strong> In mid-November, plant your pre-sprouted ranunculus corms.</li>
                <li><strong>Frost Protection:</strong> As December approaches, monitor weather forecasts. Be ready to cover tender plants (tomatoes, peppers, basil, etc.) with frost cloth on cold nights.</li>
                <li><strong>Final Harvests:</strong> Harvest all remaining frost-susceptible crops before a hard freeze. After the first frost, sow your Blue Milkweed seeds for spring germination.
                    <ul class="list-circle pl-5 mt-2">
                        <li>Blue Milkweed: Sow ${plantData.find(p => p.name === 'Blue Milkweed')?.seedsToStart || 'N/A'} seeds (After first frost in Dec)
                            <ul class="list-square pl-5 mt-1 text-sm text-gray-600">
                                ${plantData.find(p => p.name === 'Blue Milkweed')?.growthStages ? plantData.find(p => p.name === 'Blue Milkweed').growthStages.map(stage => `<li><strong>${stage.stage}:</strong> ${stage.days} - ${stage.notes}</li>`).join('') : ''}
                                ${plantData.find(p => p.name === 'Blue Milkweed')?.feedingSchedule ? plantData.find(p => p.name === 'Blue Milkweed').feedingSchedule.map(feed => `<li><strong>Feed (${feed.stage}):</strong> ${feed.type} (${feed.frequency})</li>`).join('') : ''}
                            </ul>
                        </li>
                    </ul>
                </li>
            `;
        }
        contentHtml += '</ul>';
        return contentHtml;
    }

    function renderActionPlan(filterType = 'All') {
        actionPlanContainer.innerHTML = '';
        const titles = [
            'Phase 1: Immediate Preparations (Late July - Mid-August)',
            'Phase 2: Main Planting & Establishment (Late August - September)',
            'Phase 3: Ongoing Care & Harvest (October - December)'
        ];
        titles.forEach((title, index) => {
            const div = document.createElement('div');
            div.className = 'bg-white rounded-lg shadow-md overflow-hidden';
            div.innerHTML = `
                <button class="w-full text-left p-4 font-semibold flex justify-between items-center accordion-toggle">
                    <span>${title}</span>
                    <span class="transform transition-transform duration-300">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="p-4 border-t border-gray-200 text-gray-700">${generatePhaseContent(index + 1, filterType)}</div>
                </div>
            `;
            actionPlanContainer.appendChild(div);
        });

        document.querySelectorAll('.accordion-toggle').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                const icon = button.querySelector('span:last-child');
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    icon.style.transform = 'rotate(180deg)';
                }
            });
        });
    }

    function renderTimelineChart() {
        const ctx = document.getElementById('timelineChart').getContext('2d');
        const labels = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const datasets = plantData
            .filter(p => p.plantingMonth <= 12)
            .map(p => {
                const maturityDays = parseInt(p.maturity) || 30;
                const startMonth = p.plantingMonth - 7;
                const durationMonths = maturityDays / 30;
                const data = new Array(6).fill(null);
                data[startMonth] = 1;
                return {
                    label: p.name,
                    data: [
                        {x: [p.plantingMonth - 0.5, p.plantingMonth - 0.5 + durationMonths], y: p.name}
                    ],
                    backgroundColor: Object.values(monthColors)[p.plantingMonth-7] || 'bg-gray-200',
                    borderColor: 'white',
                    borderWidth: 2,
                    borderRadius: 4,
                    borderSkipped: false,
                };
            });
        
        const plantNames = [...new Set(plantData.filter(p => p.plantingMonth <= 12).map(p => p.name))].sort();

        if (window.timelineChartInstance) {
            window.timelineChartInstance.destroy();
        }

        window.timelineChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: plantNames,
                datasets: datasets
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        min: 6.5,
                        max: 12.5,
                        grid: {
                            display: true,
                            drawBorder: false,
                        },
                        ticks: {
                            callback: function(value, index, values) {
                                return labels[value-7];
                            }
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                size: 10
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const plant = plantData.find(p => p.name === context.dataset.label);
                                return `${plant.name}: Plant in ${plant.window}`;
                            }
                        }
                    }
                },
                onClick: (e) => {
                    const activePoints = window.timelineChartInstance.getElementsAtEventForMode(e, 'nearest', { intersect: true }, true);
                    if (activePoints.length > 0) {
                        const clickedIndex = activePoints[0].index;
                        const month = Math.floor(window.timelineChartInstance.scales.x.getValueForPixel(e.x)) + 7;
                        renderPlantLibrary(p => p.plantingMonth === month);
                        document.getElementById('plants').scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        });
    }


    function renderMilestoneChart(filterType = 'All') {
        const ctx = document.getElementById('milestoneChart').getContext('2d');
        const labels = ['Jul','Aug','Sep','Oct','Nov','Dec'];
        const milestones = getMilestonesForType(filterType);
        const datasets = milestones.map(m => ({

            label: m.name,
            data: [{x: [m.start, m.end], y: m.name}],
            backgroundColor: '#A3B18A',
            borderColor: 'white',
            borderWidth: 2,
            borderRadius: 4,
            borderSkipped: false,
        }));
        if (window.milestoneChartInstance) {
            window.milestoneChartInstance.destroy();
        }
        window.milestoneChartInstance = new Chart(ctx, {
            type: 'bar',

            data: { labels: milestones.map(m => m.name), datasets: datasets },

            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        min: 6.5,
                        max: 12.5,
                        grid: { display: true, drawBorder: false },
                        ticks: { callback: function(value){ return labels[value-7]; } }
                    },
                    y: { grid: { display: false }, ticks: { font: { size: 10 } } }
                },
                plugins: { legend: { display: false } }
            }
        });
    }


    function setupBedTimelineControls() {
        const select = document.createElement('select');
        select.className = 'px-3 py-1 rounded-md border';
        const options = [];
        Object.entries(bedLayouts).forEach(([type, beds]) => {
            beds.forEach(b => options.push({ type, name: b.name }));
        });
        options.forEach(opt => {
            const o = document.createElement('option');
            o.value = opt.type + '|' + opt.name;
            o.textContent = opt.name + ' (' + opt.type + ')';
            select.appendChild(o);
        });
        bedTimelineControls.appendChild(select);
        select.addEventListener('change', () => {
            const [t, n] = select.value.split('|');
            renderBedTimelineChart(t, n);
        });
        if (options.length > 0) {
            select.value = options[0].type + '|' + options[0].name;
            renderBedTimelineChart(options[0].type, options[0].name);
        }
    }

    function renderBedTimelineChart(bedType, bedName) {
        const bed = bedLayouts[bedType].find(b => b.name === bedName);
        if (!bed) return;
        const ctx = document.getElementById('bedTimelineChart').getContext('2d');
        const labels = ['Jul','Aug','Sep','Oct','Nov','Dec'];
        const datasets = bed.squares.map(sq => {
            const plant = plantData.find(p => p.name === sq.plant);
            if (!plant) return null;
            const maturityDays = parseInt(plant.maturity) || 30;
            const duration = maturityDays / 30;
            return {
                label: plant.name,
                data: [{x: [plant.plantingMonth - 0.5, plant.plantingMonth - 0.5 + duration], y: plant.name}],
                backgroundColor: '#D4A373',
                borderColor: 'white',
                borderWidth: 2,
                borderRadius: 4,
                borderSkipped: false,
            };
        }).filter(Boolean);

        if (window.bedTimelineChartInstance) {
            window.bedTimelineChartInstance.destroy();
        }
        window.bedTimelineChartInstance = new Chart(ctx, {
            type: 'bar',
            data: { labels: datasets.map(d => d.label), datasets },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        min: 6.5,
                        max: 12.5,
                        grid: { display: true, drawBorder: false },
                        ticks: { callback: function(value){ return labels[value-7]; } }
                    },
                    y: { grid: { display: false }, ticks: { font: { size: 10 } } }
                },
                plugins: { legend: { display: false } }
            }
        });
    }

    function updateSeedsToOrderUI() {
        seedsToOrderList.innerHTML = '';
        seedsToOrder.forEach(seed => {
            const li = document.createElement('li');
            li.textContent = seed;
            seedsToOrderList.appendChild(li);
        });
    }

    function downloadSeedsList() {
        if (seedsToOrder.length === 0) {
            alert('No seeds to order.');
            return;
        }
        const content = seedsToOrder.join('\n');
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'seeds-to-order.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function setupNavbar() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href').substring(1) === entry.target.id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { rootMargin: '-50% 0px -50% 0px' });

        sections.forEach(section => observer.observe(section));

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector(link.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    function renderSwapSuggestions() {
        swapSuggestionsContainer.innerHTML = '';
        swapSuggestions.forEach(swap => {
            const swapCard = document.createElement('div');
            swapCard.className = 'bg-white p-6 rounded-lg shadow-md mb-4';
            swapCard.innerHTML = `
                <h3 class="font-bold text-xl mb-2 text-accent">Replace: ${swap.originalPlantName}</h3>
                <p class="text-gray-700 mb-4">In bed: <span class="font-semibold">${swap.bedName} (${swap.bedType})</span>, Square: <span class="font-semibold">${swap.squareRow}${swap.squareCol}</span></p>
                <div class="space-y-3">
                    ${swap.swapOptions.map(option => `
                        <div class="flex items-center justify-between bg-secondary p-3 rounded-md">
                            <div>
                                <p class="font-semibold">${option.emoji} ${option.name}</p>
                                <p class="text-sm text-gray-600">Plant in: ${option.plantingMonth === 7 ? 'July' : option.plantingMonth === 8 ? 'August' : option.plantingMonth === 9 ? 'September' : option.plantingMonth === 10 ? 'October' : option.plantingMonth === 11 ? 'November' : 'December'} (${option.viability})</p>
                                <p class="text-xs text-gray-500">${option.notes}</p>
                            </div>
                            <button class="bg-green-accent text-white px-3 py-1 rounded-full text-sm hover:bg-opacity-80 transition apply-swap-btn" 
                                    data-original-plant="${swap.originalPlantName}"
                                    data-bed-type="${swap.bedType}"
                                    data-bed-name="${swap.bedName}"
                                    data-square-row="${swap.squareRow}"
                                    data-square-col="${swap.squareCol}"
                                    data-new-plant-name="${option.name}"
                                    data-new-plant-emoji="${option.emoji}"
                                    data-new-plant-spacing="${option.sfgSpacing}"
                                    data-new-plant-month="${option.plantingMonth}"
                                    data-new-plant-viability="${option.viability}"
                                    data-new-plant-notes="${option.notes}"
                                    data-new-plant-type="${option.type}"
                                    data-new-plant-method="${option.method}"
                                    data-new-plant-seedstostart="${option.seedsToStart}"
                                    data-new-plant-maturity="${option.maturity}"
                                    data-new-plant-successionwaves="${option.successionWaves}"
                                    data-new-plant-successioninterval="${option.successionInterval}"
                                    data-new-plant-growthstages='${JSON.stringify(option.growthStages)}'
                                    data-new-plant-feedingschedule='${JSON.stringify(option.feedingSchedule)}'>
                                Apply Swap
                            </button>
                        </div>
                    `).join('')}
                </div>
            `;
            swapSuggestionsContainer.appendChild(swapCard);
        });

        document.querySelectorAll('.apply-swap-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const btnData = event.currentTarget.dataset;
                if (!confirm(`Swap ${btnData.originalPlant} with ${btnData.newPlantName}?`)) {
                    return;
                }
                const newPlantData = {
                    name: btnData.newPlantName,
                    emoji: btnData.newPlantEmoji,
                    spacing: parseInt(btnData.newPlantSpacing),
                    plantingMonth: parseInt(btnData.newPlantMonth),
                    viability: btnData.newPlantViability,
                    notes: btnData.newPlantNotes,
                    type: btnData.newPlantType,
                    method: btnData.newPlantMethod,
                    seedsToStart: btnData.newPlantSeedstostart,
                    maturity: btnData.newPlantMaturity,
                    successionWaves: parseInt(btnData.newPlantSuccessionwaves),
                    successionInterval: btnData.newPlantSuccessioninterval,
                    growthStages: JSON.parse(btnData.newPlantGrowthstages),
                    feedingSchedule: JSON.parse(btnData.newPlantFeedingschedule)
                };
                applySwap(btnData.originalPlant, btnData.bedType, btnData.bedName, btnData.squareRow, parseInt(btnData.squareCol), newPlantData);
            });
        });
    }

    function applySwap(originalPlantName, bedType, bedName, squareRow, squareCol, newPlantData) {
        // Find the specific bed
        const bed = bedLayouts[bedType].find(b => b.name === bedName);
        if (!bed) {
            console.error('Could not find bed:', bedName, bedType);
            return;
        }

        // Calculate the target square index based on row/column and grid size
        let targetSquareIndex = -1;
        if (bedType === '4x2') { // 2 rows, 4 cols per row
            targetSquareIndex = (squareRow === 'A' ? 0 : 1) * 4 + (squareCol - 1);
        } else if (bedType === '6x2') { // 2 rows, 6 cols per row
            targetSquareIndex = (squareRow === 'A' ? 0 : 1) * 6 + (squareCol - 1);
        } else if (bedType === '8x1') { // 1 row, 8 cols per row
            targetSquareIndex = (squareCol - 1);
        }

        if (targetSquareIndex === -1 || targetSquareIndex >= bed.squares.length) {
            console.error('Calculated square index is out of bounds or invalid for bed:', bedName, squareRow, squareCol, targetSquareIndex);
            return;
        }

        // Update the bed layout
        bed.squares[targetSquareIndex].plant = newPlantData.name;
        bed.squares[targetSquareIndex].count = newPlantData.spacing;
        bed.squares[targetSquareIndex].month = newPlantData.plantingMonth;

        // Add new plant to plantData if it doesn't exist (unless it's an "Extra" of an existing plant)
        const isExtraOfExisting = newPlantData.name.includes('(Extra)');
        const existingPlant = plantData.find(p => p.name === newPlantData.name);
        if (!existingPlant && !isExtraOfExisting) {
            plantData.push(newPlantData);
            if (!seedsToOrder.includes(newPlantData.name)) {
                seedsToOrder.push(newPlantData.name);
            }
        } else if (existingPlant && isExtraOfExisting) {
            const basePlantName = newPlantData.name.replace(' (Extra)', '');
            if (!plantData.find(p => p.name === basePlantName)) {
                plantData.push({ ...newPlantData, name: basePlantName, viability: newPlantData.viability.replace(' (Extra)', '') });
                if (!seedsToOrder.includes(basePlantName)) {
                    seedsToOrder.push(basePlantName);
                }
            }
        }

        // Re-render affected sections
        renderBedLayouts(bedType); // Re-render the specific bed type that was changed
        renderPlantLibrary();
        renderTimelineChart(); // Re-render chart to include new plants if added
        renderActionPlan(currentActionPlanFilter); // Re-render action plan with current filter
        
        // Remove the applied swap suggestion from the list
        swapSuggestions = swapSuggestions.filter(s =>
            !(s.originalPlantName === originalPlantName &&
              s.bedType === bedType &&
              s.bedName === bedName &&
              s.squareRow === squareRow &&
              parseInt(s.squareCol) === squareCol)
        );
        renderSwapSuggestions();
        updateSeedsToOrderUI();

        saveData();

        alert(`Successfully swapped ${originalPlantName} with ${newPlantData.name} in ${bedName} (${bedType}) at square ${squareRow}${squareCol}!`);
    }

    // Setup action plan filters
    actionPlanFilters.querySelectorAll('.filter-action-plan-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            currentActionPlanFilter = event.target.dataset.filter;
            actionPlanFilters.querySelectorAll('.filter-action-plan-btn').forEach(btn => {
                btn.classList.remove('bg-green-accent', 'text-white');
                btn.classList.add('bg-secondary');
            });
            event.target.classList.remove('bg-secondary');
            event.target.classList.add('bg-green-accent', 'text-white');
            renderActionPlan(currentActionPlanFilter);
            renderMilestoneChart(currentActionPlanFilter);
            actionPlanData.filter = currentActionPlanFilter;
            saveData();
        });
    });


    resetFilterBtn.addEventListener('click', () => {
        renderPlantLibrary();
    });

    addPlantBtn.addEventListener('click', () => {
        openPlantForm();
    });

    addBedBtn.addEventListener('click', () => {
        openBedForm();
    });

    downloadSeedsBtn.addEventListener('click', () => {
        downloadSeedsList();
    });

    editLocationBtn.addEventListener('click', () => {
        locationFormModal.style.display = 'flex';
    });

    saveLocationBtn.addEventListener('click', async () => {
        const zip = zipInput.value.trim();
        let locationInfo = zipData[zip];
        if (!locationInfo) {
            locationInfo = await lookupZip(zip);
            if (locationInfo) {
                zipData[zip] = locationInfo; // cache for session
            }
        }
        if (locationInfo) {
            userLocation = { zip, ...locationInfo };
            updateLocationUI();
            locationFormModal.style.display = 'none';
            saveData();
        } else {
            alert('ZIP code not available.');
        }
    });

    bedForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = bedNameInput.value;
        const cols = parseInt(bedColsInput.value);
        const rows = parseInt(bedRowsInput.value);
        if (!cols || !rows) return;
        const type = `${cols}x${rows}`;
        const grid = `grid-cols-${cols}`;
        const squares = Array.from({ length: cols * rows }, () => ({ plant: 'Empty', count: 0, month: 0 }));
        if (editBedType !== null && editBedIndex !== null) {
            if (type !== editBedType) {
                bedLayouts[editBedType].splice(editBedIndex, 1);
                if (!bedLayouts[type]) bedLayouts[type] = [];
                bedLayouts[type].push({ name, grid, squares });
                if (currentBedType === editBedType) currentBedType = type;
            } else {
                bedLayouts[editBedType][editBedIndex] = { name, grid, squares };
            }
        } else {
            if (!bedLayouts[type]) bedLayouts[type] = [];
            bedLayouts[type].push({ name, grid, squares });
            currentBedType = type;
        }
        setupBedSelectors();
        renderBedLayouts(currentBedType);
        saveData();
        closeBedFormModal();
    });

    plantForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newPlant = {
            name: plantNameInput.value,
            emoji: plantEmojiInput.value,
            viability: plantViabilityInput.value,
            method: plantMethodInput.value,
            window: plantWindowInput.value,
            spacing: plantSpacingInput.value,
            maturity: plantMaturityInput.value,
            notes: plantNotesInput.value,
            type: plantTypeInput.value,
            plantingMonth: parseInt(plantMonthInput.value) || 0
        };
        if (editPlantIndex !== null) {
            plantData[editPlantIndex] = newPlant;
        } else {
            plantData.push(newPlant);
        }
        renderPlantLibrary();
        saveData();
        closePlantFormModal();
    });

    renderPlantLibrary();
    setupBedSelectors();
    renderBedLayouts(currentBedType); // Initial render
    renderSwapSuggestions();
    renderActionPlan(currentActionPlanFilter); // Initial render of action plan
    renderTimelineChart();

    renderMilestoneChart(currentActionPlanFilter);
    setupBedTimelineControls();
    updateSeedsToOrderUI();

    setupNavbar();

    saveData();
});
