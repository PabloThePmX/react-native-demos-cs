export async function loadFont() {
    await Font.loadAsync({
        'StarJedi': require('../assets/fonts/Starjedi.ttf'),
    });
    await SplashScreen.hideAsync(); 
}