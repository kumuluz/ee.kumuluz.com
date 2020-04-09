

export class VersionUtil {

    static versionIsLarger(version1, version2) {
        let v1 = version1.split(".");
        let v2 = version2.split(".");

        if (parseInt(v1[0], 10) > parseInt(v2[0], 10)) return true;
        if (parseInt(v1[0], 10) < parseInt(v2[0], 10)) return false;

        if (parseInt(v1[1], 10) > parseInt(v2[1], 10)) return true;
        if (parseInt(v1[1], 10) < parseInt(v2[1], 10)) return false;

        v1 = v1[2].split("-");
        v2 = v2[2].split("-");

        if (v1[0] > v2[0]) return true;
        if (v1[0] < v2[0]) return false;

        if (v1[0] > v2[0]) return true;
        if (v1[0] < v2[0]) return false;

        if (v1.length >= 2 && v2.length === 1) {
            return true;
        }
        if (v2.length >= 2 && v1.length === 1) {
            return false;
        }
        if (v1.length >= 2 && v2.length >= 2) {
            if (v1[1].toUpperCase() === "SNAPSHOT" && v2[1].toUpperCase() === "BETA") return true;
            if (v1[1].toUpperCase() === "BETA" && v2[1].toUpperCase() === "SNAPSHOT") return false;
        }
        return false;
    }

    static versionIsSmaller(version1, version2) {
        if (version1.toUpperCase() === version2.toUpperCase()) return false;
        if (version1 !== "*" && version2 === "*") {
            return true;
        }
        return !VersionUtil.versionIsLarger(version1, version2);
    }

    static versionIsSmallerOrEqual(version1, version2) {
        return version1.toUpperCase() === version2.toUpperCase() || VersionUtil.versionIsSmaller(version1, version2);
    }

    static versionIsLargerOrEqual(version1, version2) {
        return version1.toUpperCase() === version2.toUpperCase() || VersionUtil.versionIsLarger(version1, version2);
    }

}
