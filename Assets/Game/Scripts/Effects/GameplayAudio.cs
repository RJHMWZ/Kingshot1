using UnityEngine;

namespace Kingshot.Gameplay
{
    public sealed class GameplayAudio : MonoBehaviour
    {
        private AudioSource music; private AudioSource effects; private PlayerWallet wallet; private Health player;
        private GameSession session; private PlayerAutoAttack autoAttack;
        private AudioClip coinClip; private AudioClip hitClip; private AudioClip shotClip; private AudioClip resultClip;

        public void Configure(PlayerWallet playerWallet, Health playerHealth, GameSession gameSession, PlayerAutoAttack attack)
        {
            wallet = playerWallet; player = playerHealth; session = gameSession; autoAttack = attack;
            music = gameObject.AddComponent<AudioSource>(); effects = gameObject.AddComponent<AudioSource>();
            music.loop = true; music.volume = 0.06f; effects.volume = 0.22f;
            music.clip = CreateTone("Ambient", 110f, 2f, 0.025f); music.Play();
            coinClip = CreateTone("Coin", 880f, 0.08f, 0.18f); hitClip = CreateTone("Hit", 150f, 0.08f, 0.16f);
            shotClip = CreateTone("Shot", 420f, 0.05f, 0.12f); resultClip = CreateTone("Result", 660f, 0.3f, 0.15f);
            wallet.Changed += OnWalletChanged; player.OnDamaged += OnDamaged; session.ResultChanged += OnResult;
            if (autoAttack != null) autoAttack.ShotFired += OnShot;
        }

        private void OnWalletChanged(int value, int capacity) => effects.PlayOneShot(coinClip);
        private void OnDamaged(int damage) => effects.PlayOneShot(hitClip);
        private void OnShot() => effects.PlayOneShot(shotClip);
        private void OnResult(GameSession.Result result) => effects.PlayOneShot(resultClip);

        private static AudioClip CreateTone(string name, float frequency, float duration, float amplitude)
        {
            const int sampleRate = 22050; int count = Mathf.CeilToInt(sampleRate * duration); float[] data = new float[count];
            for (int i = 0; i < count; i++) data[i] = Mathf.Sin(2f * Mathf.PI * frequency * i / sampleRate) * amplitude;
            AudioClip clip = AudioClip.Create(name, count, 1, sampleRate, false); clip.SetData(data, 0); return clip;
        }

        private void OnDestroy()
        {
            if (wallet != null) wallet.Changed -= OnWalletChanged;
            if (player != null) player.OnDamaged -= OnDamaged;
            if (session != null) session.ResultChanged -= OnResult;
            if (autoAttack != null) autoAttack.ShotFired -= OnShot;
        }
    }
}
