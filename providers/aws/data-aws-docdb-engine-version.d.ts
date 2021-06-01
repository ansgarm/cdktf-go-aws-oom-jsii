import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDocdbEngineVersionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_engine_version.html#engine DataAwsDocdbEngineVersion#engine}.
     */
    readonly engine?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_engine_version.html#parameter_group_family DataAwsDocdbEngineVersion#parameter_group_family}.
     */
    readonly parameterGroupFamily?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_engine_version.html#preferred_versions DataAwsDocdbEngineVersion#preferred_versions}.
     */
    readonly preferredVersions?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_engine_version.html#version DataAwsDocdbEngineVersion#version}.
     */
    readonly version?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/docdb_engine_version.html aws_docdb_engine_version}.
 */
export declare class DataAwsDocdbEngineVersion extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/docdb_engine_version.html aws_docdb_engine_version} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsDocdbEngineVersionConfig);
    private _engine?;
    get engine(): string;
    set engine(value: string);
    resetEngine(): void;
    get engineInput(): string | undefined;
    get engineDescription(): string;
    get exportableLogTypes(): string[];
    get id(): string;
    private _parameterGroupFamily?;
    get parameterGroupFamily(): string;
    set parameterGroupFamily(value: string);
    resetParameterGroupFamily(): void;
    get parameterGroupFamilyInput(): string | undefined;
    private _preferredVersions?;
    get preferredVersions(): string[];
    set preferredVersions(value: string[]);
    resetPreferredVersions(): void;
    get preferredVersionsInput(): string[] | undefined;
    get supportsLogExportsToCloudwatch(): boolean;
    get validUpgradeTargets(): string[];
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    get versionDescription(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
