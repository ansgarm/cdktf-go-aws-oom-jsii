import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GameliftBuildConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#name GameliftBuild#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#operating_system GameliftBuild#operating_system}.
     */
    readonly operatingSystem: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#tags GameliftBuild#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#tags_all GameliftBuild#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#version GameliftBuild#version}.
     */
    readonly version?: string;
    /**
     * storage_location block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#storage_location GameliftBuild#storage_location}
     */
    readonly storageLocation: GameliftBuildStorageLocation[];
}
export interface GameliftBuildStorageLocation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#bucket GameliftBuild#bucket}.
     */
    readonly bucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#key GameliftBuild#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#role_arn GameliftBuild#role_arn}.
     */
    readonly roleArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html aws_gamelift_build}.
 */
export declare class GameliftBuild extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html aws_gamelift_build} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GameliftBuildConfig);
    get arn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _operatingSystem;
    get operatingSystem(): string;
    set operatingSystem(value: string);
    get operatingSystemInput(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    private _storageLocation;
    get storageLocation(): GameliftBuildStorageLocation[];
    set storageLocation(value: GameliftBuildStorageLocation[]);
    get storageLocationInput(): GameliftBuildStorageLocation[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
