using System;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace Kingshot.Gameplay
{
    public sealed class GameSession : MonoBehaviour
    {
        public enum Result { Playing, Victory, Defeat }
        public event Action<Result> ResultChanged;
        public Result CurrentResult { get; private set; } = Result.Playing;
        public bool IsPlaying => CurrentResult == Result.Playing;

        public void Win() => Finish(Result.Victory);
        public void Lose() => Finish(Result.Defeat);

        private void Finish(Result result)
        {
            if (!IsPlaying) return;
            CurrentResult = result;
            Time.timeScale = 0f;
            ResultChanged?.Invoke(result);
        }

        public void Restart()
        {
            Time.timeScale = 1f;
            SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
        }

        private void OnDestroy() => Time.timeScale = 1f;
    }
}
