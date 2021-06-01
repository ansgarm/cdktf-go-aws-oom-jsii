import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncLocationNfsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#server_hostname DatasyncLocationNfs#server_hostname}.
     */
    readonly serverHostname: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#subdirectory DatasyncLocationNfs#subdirectory}.
     */
    readonly subdirectory: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#tags DatasyncLocationNfs#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#tags_all DatasyncLocationNfs#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * on_prem_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#on_prem_config DatasyncLocationNfs#on_prem_config}
     */
    readonly onPremConfig: DatasyncLocationNfsOnPremConfig[];
}
export interface DatasyncLocationNfsOnPremConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#agent_arns DatasyncLocationNfs#agent_arns}.
     */
    readonly agentArns: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html aws_datasync_location_nfs}.
 */
export declare class DatasyncLocationNfs extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html aws_datasync_location_nfs} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DatasyncLocationNfsConfig);
    get arn(): string;
    get id(): string;
    private _serverHostname;
    get serverHostname(): string;
    set serverHostname(value: string);
    get serverHostnameInput(): string;
    private _subdirectory;
    get subdirectory(): string;
    set subdirectory(value: string);
    get subdirectoryInput(): string;
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
    get uri(): string;
    private _onPremConfig;
    get onPremConfig(): DatasyncLocationNfsOnPremConfig[];
    set onPremConfig(value: DatasyncLocationNfsOnPremConfig[]);
    get onPremConfigInput(): DatasyncLocationNfsOnPremConfig[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
